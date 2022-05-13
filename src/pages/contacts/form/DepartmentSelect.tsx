import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import * as React from 'react';
import { Control, Controller } from 'react-hook-form';
import { departmentLabels } from 'src/core/domain/user';
import { Inputs } from './DialogForm';

type Props = {
  control: Control<Inputs>;
};

export const DepartmentSelect: React.FC<Props> = (props) => {
  const { control } = props;

  return (
    <FormControl margin="dense" fullWidth>
      <InputLabel id="department-select-label">Department</InputLabel>
      <Controller
        name="department"
        control={control}
        render={({ field }) => (
          <Select {...field} variant="standard" labelId="department-select-label">
            <MenuItem value="">
              <em>Select Department</em>
            </MenuItem>
            {Object.entries(departmentLabels).map(([val, label]) => (
              <MenuItem key={val} value={val}>
                {label}
              </MenuItem>
            ))}
          </Select>
        )}
      />
    </FormControl>
  );
};
