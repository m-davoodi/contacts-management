export type GenderType = 'male' | 'female' | 'other';

export type DepartmentType = 'marketing' | 'sales' | 'it' | 'support';

export type UserDto = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
  department?: DepartmentType;
  gender?: GenderType;
  contribution?: string;
  isActive?: boolean;
};

export type UserListQueryParams = {
  page?: number;
};
