import {
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from 'react';

/**
 * Marca los contenedores de título que pueden adoptar el id que el
 * `aria-labelledby` del diálogo espera. Sirve para distinguirlos de un id que
 * haya puesto el consumidor, que siempre manda sobre ellos.
 */
export const LABEL_SLOT_ATTRIBUTE = 'data-d-label-slot';

/**
 * Decide si el contenedor del título debe llevar el id que el
 * `aria-labelledby` del diálogo espera (`${name}Label`).
 *
 * Solo lo adopta si nadie más lo tiene ya dentro del diálogo, porque el título
 * puede vivir fuera del header. Devuelve la ref del contenedor y si le toca
 * llevar el id.
 */
export default function useDialogLabelSlot(
  labelId: string | undefined,
  dialogSelector: string,
): [RefObject<HTMLDivElement | null>, boolean] {
  const titleRef = useRef<HTMLDivElement>(null);
  const [labelOnSlot, setLabelOnSlot] = useState(false);

  useLayoutEffect(() => {
    const title = titleRef.current;
    // El diálogo ya está en el DOM cuando corre este efecto, pero su ref aún no
    // está asignada: se busca la raíz desde el propio header.
    const dialog = title?.closest(dialogSelector);
    if (!labelId || !title || !dialog) {
      setLabelOnSlot(false);
      return undefined;
    }

    const update = () => {
      // Se compara `element.id` en vez de interpolar el id en el selector: un
      // `name` con comillas produciría un selector inválido y lanzaría.
      const owners = Array.from(dialog.querySelectorAll('[id]'))
        .filter((element) => element.id === labelId);

      // Un id puesto por el consumidor manda sobre cualquier contenedor.
      if (owners.some((element) => !element.hasAttribute(LABEL_SLOT_ATTRIBUTE))) {
        setLabelOnSlot(false);
        return;
      }

      // Si no lo hay, lo adopta el primer contenedor en orden de documento. La
      // decisión no mira quién tiene el id ahora mismo: si lo hiciera, con dos
      // headers montados cada uno se lo quitaría al ver al otro y lo volvería a
      // reclamar al verlo libre, en bucle.
      const slots = Array.from(dialog.querySelectorAll(`[${LABEL_SLOT_ATTRIBUTE}]`))
        .filter((slot) => slot.closest('.modal, .offcanvas') === dialog);
      setLabelOnSlot(slots[0] === title);
    };

    update();
    // Cubre los títulos que añaden o quitan el id por su propio estado y los
    // headers que montan o desmontan.
    const observer = new MutationObserver(update);
    observer.observe(dialog, {
      subtree: true,
      childList: true,
      attributes: true,
      attributeFilter: ['id'],
    });
    return () => observer.disconnect();
  }, [labelId, dialogSelector]);

  return [titleRef, labelOnSlot];
}
