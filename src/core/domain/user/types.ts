export type UserDto = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type UserListQueryParams = {
  page?: number;
};
