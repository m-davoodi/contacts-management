import qs from 'qs';
import { BASE_URL } from 'src/core/constants';

export type RequestConfig<P = {}> = RequestInit & { params?: P };

export function client(path: string, { body, params, ...customConfig }: RequestConfig = {}) {
  const headers = { 'content-type': 'application/json' };

  const config: RequestInit = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  };
  if (body) {
    config.body = JSON.stringify(body);
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
