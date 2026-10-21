# feat: DToast nativo, en reemplazo de react-hot-toast

Reemplaza el wrapper de `react-hot-toast` por una implementación propia del
toast, portada desde la que se construyó en `dynamic-ui`. El markup que se
renderiza y todas las variables CSS siguen sobre los tokens basados en Bootstrap
que este paquete ya trae, así que ningún theme ni override de estilos existente
necesita cambiar.

`react-hot-toast` sale de `dependencies`, de `peerDependencies` y del lockfile.

## Por qué

El wrapper se gastaba entero deshaciendo las decisiones de la librería: cada
toast pasaba por `toast.custom()` porque el markup propio de la librería no era
el nuestro, su flag `visible` había que traducirlo a renderizar `null`, y su
contenedor se posicionaba con estilos inline que después la hoja de estilos
tenía que pelear. Lo que realmente usábamos de la librería era una lista, seis
ubicaciones y un timer.

Al ser nuestros, el stack de toasts se tematiza con `--bs-toast-*` como
cualquier otro componente, en vez de con los estilos inline de un tercero.

## Qué incluye

**`src/components/DToast/store.ts`** — la cola, sin React adentro: seis
ubicaciones, una fase `leaving` con período de gracia, un tope de 20 toasts que
descarta los *más viejos*, y timers que se pausan con hover y con foco. `pause`
registra cuánto tiempo **queda**, no cuándo arrancó la cuenta, así un toast
hovereado tres veces igual se va (WCAG 2.2.1). Cubierto por `store.spec.ts` con
un reloj inyectado, para que los tests no esperen cinco segundos.

**`DToastRegion` / `DToastSlot`** — una región por cada esquina en uso, y un slot
por toast que carga la transición de entrada y salida, los handlers de pausa por
hover y el `onTransitionEnd`.

**`DToastContext` / `DToastDismiss`** — el contenido de un toast se cierra a sí
mismo leyendo el toast desde el contexto, sin que haya que pasarle un id desde
quien lo invoca.

**`DToastContainer`** — `useSyncExternalStore` más un portal a `document.body`.
Mantiene las seis regiones montadas (ver Accesibilidad) y resuelve en tiempo de
render dónde va un toast que no eligió ubicación: `toast()` puede llamarse antes
de que el contenedor monte, así que el store deja `placement` sin resolver en vez
de estampar un default que después nadie podría mover.

## Accesibilidad

La live region pasó de cada `DToast` a la región que los contiene.

Antes cada toast cargaba `role="alert" aria-live="assertive" aria-atomic="true"`.
Una live region insertada en el mismo momento que su contenido frecuentemente no
se anuncia — la tecnología asistiva tiene que estar observando el elemento
*antes* de que ocurra el cambio —, así que el anuncio aparecía o no según el
timing, y varios toasts llegando juntos se anunciaban encima unos de otros.

Ahora `DToastRegion` renderiza una región `role="status" aria-live="polite"
aria-atomic="false"` por esquina. Las seis se montan vacías desde el primer
paint y se quedan ahí: una región que apareciera junto con su primer toast
reintroduciría exactamente el problema de timing que se quiere resolver, y se
perdería justo la notificación aislada, que es la que más importa. Una región
vacía cuesta un elemento inerte, sin tamaño ni eventos de puntero.

Un `DToast` puesto a mano en la página ya no se anuncia, que es lo correcto:
markup estático no es un evento.

## Breaking changes

| Antes | Ahora |
|-------|-------|
| `<DToastContainer position="top-right" />` | `<DToastContainer placement="top-end" />` — ubicaciones lógicas: `top-start`, `top-center`, `top-end`, `bottom-start`, `bottom-center`, `bottom-end` |
| `gutter={8}` | `--bs-toast-spacing` |
| `containerClassName`, `containerStyle`, `toastOptions` | se eliminan — la región es nuestra y se tematiza con variables CSS |
| — | `portal` (por defecto `true`); ponerlo en `false` para renderizar en el lugar |
| `toast(({ id, visible }) => …)` | `toast(<MiToast />)`, cerrándose con `<DToastDismiss />` |
| `reactHotToast.dismiss(id)` | `const { dismiss, dismissAll } = useDToast()` |
| `ToastData.closeAriaLabel` | `ToastData.closeLabel` |
| `ToastData.role`, `role` de `DToast` | se eliminan — ver Accesibilidad |

Exports nuevos: `DToastDismiss`, `useDToastContext`, y los tipos
`ToastPlacement` y `DToastContextValue`.

## Tokens

El markup no cambia — `.toast`, `.toast-header`, `.toast-body`, `.toast-title`,
`.toast-icon`, `.toast-timestamp`, `.toast-{color}`, `.d-close` —, así que todo
lo que ya existía en `src/style/base/_toast.scss` sigue aplicando tal cual.

La región es el `.toast-container` propio de Bootstrap, heredando
`--bs-toast-zindex` y usando `--bs-toast-spacing` para el espacio entre toasts
apilados. Hay una sola variable nueva, `--bs-toast-container-inset`, para la
distancia al borde del viewport; queda registrada en `known-tokens.json` como el
resto.

Las reglas nuevas están scopeadas a `.toast-container[data-placement]`, un
atributo que solo lleva una región renderizada por nosotros, así que el markup
`.toast-container` escrito a mano conserva intacto el `position: absolute` de
Bootstrap.

Las ubicaciones usan propiedades lógicas (`inset-block`, `inset-inline`) salvo
el centrado, que ancla con `left: 50%` físico a propósito: `inset-inline-start`
se voltea al borde derecho en RTL mientras el `translateX(-50%)` sigue tirando a
la izquierda, y el punto medio del viewport es el mismo en ambas direcciones.

La clase `show` que el `useDToast` anterior agregaba a cada toast desaparece:
dentro de un slot el contenedor decide qué está montado, así que no hay un
segundo flag que mantener sincronizado.

## Testing

- `store.spec.ts` — la cola y los timers, contra un reloj inyectado.
- `useDToast.spec.tsx` — reescrito. Antes mockeaba `react-hot-toast` y verificaba
  que el wrapper llamara a `toast.custom()` con los argumentos correctos, es
  decir, probaba el cableado a un tercero. Ahora verifica lo que termina en la
  página: renderizado, apilado, agrupación por ubicación, cierre, actualización
  en el lugar y el anuncio.
- Cobertura específica del ciclo de vida de las regiones: que las seis estén
  montadas y vacías antes del primer toast, y que sigan montadas después del
  último.
- Los holds del timer: hover y foco combinados, foco moviéndose entre controles
  del propio toast, y el hold sobreviviendo a una actualización en el lugar.
- El `transitionend` que burbujea desde contenido propio del consumidor.
- Los tests de a11y cubren una región con un toast adentro, en vez de un
  contenedor vacío que no renderiza nada.

Suite completa: **1123 pasando, 0 fallando**, más **206 de a11y**.

También verificado: `tsc`, `eslint`, `stylelint`, el build de SCSS, y
`generate:registry` + `validate:registry`.
