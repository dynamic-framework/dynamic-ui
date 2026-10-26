/// <reference types="react" />
/**
 * Id que el `aria-labelledby` de DOffcanvas espera en el título
 * (`${name}Label`). Lo provee DOffcanvas; fuera de un DOffcanvas no hay id.
 */
declare const DOffcanvasLabelContext: import("react").Context<string | undefined>;
export default DOffcanvasLabelContext;
