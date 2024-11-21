import {
  DContextProvider,
  useMediaBreakpointUpXs,
  useMediaBreakpointUpSm,
  useMediaBreakpointUpLg,
} from '../../src';

export function ExampleOfUse() {
  const inXs = useMediaBreakpointUpXs(true);
  const inSm = useMediaBreakpointUpSm(true);
  const inXl = useMediaBreakpointUpLg(true);

  return (
    <>
      {inXs && <p>min-width to XS breakpoint</p>}
      {inSm && <p>min-width to SM breakpoint</p>}
      {inXl && <p>min-width to LG breakpoint</p>}
    </>
  );
}

export function ExampleRoot() {
  return (
    <DContextProvider>
      <ExampleOfUse />
    </DContextProvider>
  );
}
