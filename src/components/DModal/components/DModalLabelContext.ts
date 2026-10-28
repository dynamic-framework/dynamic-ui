import { createContext } from 'react';

/**
 * Id que DModal pone en el contenedor del título del header y al que apunta
 * con `aria-labelledby`. Lo genera DModal con `useId`, así que es único y no
 * puede chocar con ningún id del consumidor. Fuera de un DModal no hay id.
 */
const DModalLabelContext = createContext<string | undefined>(undefined);

export default DModalLabelContext;
