/*
 * Namespace 'React' has no exported member 'StatelessComponent'
 * in formik
 */
declare namespace React {
  type StatelessComponent<P> = React.FunctionComponent<P>;
}

interface Navigator {
  canShare(data?: ShareData): boolean;

  share(data?: ShareData): Promise<void>;
}

interface Window {
  liquidjs: never
}
