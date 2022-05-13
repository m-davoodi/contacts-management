import { DepartmentType, GenderType } from './types';

export const genderLabels: Record<GenderType, string> = {
  female: 'Female',
  male: 'Male',
  other: 'Other',
};

export const departmentLabels: Record<DepartmentType, string> = {
  marketing: 'Marketing',
  sales: 'Sales',
  it: 'IT',
  support: 'Support',
};
