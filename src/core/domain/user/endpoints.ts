import { UserListQueryParams } from './types';

export const userEndpoints = {
  list: (params?: UserListQueryParams) => ['users', params],
  update: (id: number) => `users/${id}`,
};
