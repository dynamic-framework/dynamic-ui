import { createContext } from 'react';

/**
 * Id que DOffcanvas pone en el contenedor del título del header y al que apunta
 * con `aria-labelledby`. Lo genera DOffcanvas con `useId`, así que es único y no
 * puede chocar con ningún id del consumidor. Fuera de un DOffcanvas no hay id.
 */
const DOffcanvasLabelContext = createContext<string | undefined>(undefined);

export default DOffcanvasLabelContext;
