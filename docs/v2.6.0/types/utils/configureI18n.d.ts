import { InitOptions, Resource, TFunction } from 'i18next';
export default function configureI8n(resources: Resource, { lng, fallbackLng, ...config }?: InitOptions | undefined): Promise<TFunction>;
