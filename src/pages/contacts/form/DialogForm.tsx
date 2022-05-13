import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
} from '@mui/material';
import * as React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { DepartmentType, GenderType, UserDto, userEndpoints } from 'src/core/domain/user';
import { CheckboxController, CurrencyTextField } from 'src/shared/form';
import { client } from 'src/shared/utils';
import { DepartmentSelect } from './DepartmentSelect';
import { GenderSelect } from './GenderSelect';

export type Inputs = {
  first_name: string;
  last_name?: string;
  email: string;
  gender: GenderType | null;
  department: DepartmentType | '';
  contribution?: string;
  isActive?: boolean;
};

type Props = {
  open: boolean;
  onClose: () => void;
  user: UserDto;
};

export const DialogForm: React.FC<Props> = (props) => {
  const { onClose, open, user } = props;
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating },
    control,
  } = useForm<Inputs>({
    mode: 'all',
    defaultValues: {
      gender: null,
      department: '',
      contribution: '',
      isActive: true,
      ...user,
    },
  });

  const { mutateAsync } = useMutation((data: Inputs) =>
    client(userEndpoints.update(user.id), {
      jsonBody: data,
      method: 'PUT',
    }),
  );
  const queryClient = useQueryClient();

  const onSubmit: SubmitHandler<Inputs> = (data) =>
    mutateAsync(data, {
      onSuccess: () => {
        queryClient.invalidateQueries(userEndpoints.list());
        onClose();
      },
    });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogTitle>
          Edit Contact "{user.first_name} {user.last_name}"
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item sm={12} md={6}>
              <TextField
                margin="dense"
                label="First Name"
                fullWidth
                variant="standard"
                error={!!errors.first_name?.message}
                helperText={errors.first_name?.message ?? ' '}
                {...register('first_name', { required: 'First name is required' })}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField margin="dense" label="Last Name" fullWidth variant="standard" {...register('last_name')} />
            </Grid>
            <Grid item sm={12}>
              <GenderSelect control={control} />
            </Grid>
            <Grid item sm={12}>
              <TextField
                margin="dense"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
                error={!!errors.email?.message}
                helperText={errors.email?.message ?? ' '}
                {...register('email', { required: 'Email is required' })}
              />
            </Grid>
            <Grid item sm={12} md={6}>
              <DepartmentSelect control={control} />
            </Grid>
            <Grid item sm={12} md={6}>
              <TextField
                margin="dense"
                label="Contribution"
                fullWidth
                variant="standard"
                {...register('contribution')}
                InputProps={{
                  inputComponent: CurrencyTextField as any,
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item sm={12}>
              <FormGroup>
                <CheckboxController control={control} name="isActive" label="Is Active" />
              </FormGroup>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancel</Button>
          <Button type="submit" disabled={isSubmitting || isValidating}>
            Save
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};
