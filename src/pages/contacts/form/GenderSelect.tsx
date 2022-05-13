import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import * as React from 'react';
import { Control, Controller } from 'react-hook-form';
import { genderLabels } from 'src/core/domain/user';
import { Inputs } from './DialogForm';

type Props = {
  control: Control<Inputs>;
};

export const GenderSelect: React.FC<Props> = (props) => {
  const { control } = props;
  return (
    <FormControl>
      <FormLabel>Gender</FormLabel>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <RadioGroup {...field} row>
            {Object.entries(genderLabels).map(([val, label]) => (
              <FormControlLabel key={val} value={val} control={<Radio />} label={label} />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};
