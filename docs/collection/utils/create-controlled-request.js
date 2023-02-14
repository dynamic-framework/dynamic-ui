/**
 * @deprecated
 * @param client
 * @param config
 */
export default function createControlledRequest(client, config) {
  const abortController = new AbortController();
  return {
    perform: async () => {
      const { data } = await client.request(Object.assign(Object.assign({}, config), { signal: abortController.signal }));
      return data;
    },
    abort: () => abortController.abort(),
  };
}
