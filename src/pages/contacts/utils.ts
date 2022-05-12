import { UserDto } from 'src/core/domain/user';

export const filterUsers = (users: UserDto[], query?: string): UserDto[] => {
  if (!query) {
    return users;
  }

  const regex = new RegExp(query, 'i');
  return users.filter(({ first_name, last_name }) => regex.test(`${first_name} ${last_name}`));
};
