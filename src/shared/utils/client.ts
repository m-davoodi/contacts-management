import qs from 'qs';
import { BASE_URL } from 'src/core/constants';

export type RequestConfig<P = {}, B = {}> = RequestInit & { params?: P; jsonBody?: B };

export function client(path: string, { jsonBody, params, ...customConfig }: RequestConfig = {}) {
  const headers = { 'content-type': 'application/json' };

  const config: RequestInit = {
    method: jsonBody ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (jsonBody) {
    config.body = JSON.stringify(jsonBody);
  }
  let endpoint = `${BASE_URL}/${path}`;
  endpoint += params !== undefined ? `?${qs.stringify(params)}` : '';
  return window.fetch(endpoint, config).then(async (response) => {
    if (response.ok) {
      return await response.json();
    } else {
      const errorMessage = await response.text();
      return Promise.reject(new Error(errorMessage));
    }
  });
}
