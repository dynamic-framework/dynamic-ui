import { createContext } from 'react';

/**
 * Id que el `aria-labelledby` de DModal espera en el título (`${name}Label`).
 * Lo provee DModal; fuera de un DModal no hay id.
 */
const DModalLabelContext = createContext<string | undefined>(undefined);

export default DModalLabelContext;
