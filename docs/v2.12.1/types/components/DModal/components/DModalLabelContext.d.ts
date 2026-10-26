/// <reference types="react" />
/**
 * Id que el `aria-labelledby` de DModal espera en el título (`${name}Label`).
 * Lo provee DModal; fuera de un DModal no hay id.
 */
declare const DModalLabelContext: import("react").Context<string | undefined>;
export default DModalLabelContext;
