import { Checkbox, FormControlLabel } from '@mui/material';
import * as React from 'react';
import { Controller, Control, Path } from 'react-hook-form';

type Props<T> = {
  control: Control<T>;
  name: Path<T>;
  label: string;
};

export function CheckboxController<T>(props: Props<T>) {
  const { control, name, label } = props;
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox {...field} checked={!!field.value} onChange={(e) => field.onChange(e.target.checked)} />
          )}
        />
      }
      label={label}
    />
  );
}
