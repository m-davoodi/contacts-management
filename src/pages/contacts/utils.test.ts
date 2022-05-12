import { UserDto } from 'src/core/domain/user';
import { filterUsers } from './utils';

const users: UserDto[] = [
  {
    id: 7,
    email: 'michael.lawson@reqres.in',
    first_name: 'Michael',
    last_name: 'Lawson',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  },
  {
    id: 8,
    email: 'lindsay.ferguson@reqres.in',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
  },
];

describe('filterUsers', () => {
  it('should return the same list when the query is undefined', () => {
    expect(filterUsers(users)).toBe(users);
  });

  it.each(['lindsay', 'ferguson', 'lind', 'guson'])('should return correctly with the query %j', (query: string) => {
    expect(filterUsers(users, query)).toStrictEqual([users[1]]);
  });
});
