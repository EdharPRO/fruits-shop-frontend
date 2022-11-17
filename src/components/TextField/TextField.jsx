import MuiTextField from '@mui/material/TextField';
import { useFormContext, Controller } from 'react-hook-form';

export const TextField = ({ name, ...props }) => {
  const formContext = useFormContext();

  return (
    <Controller
      name={name}
      control={formContext.control}
      render={({ field, fieldState }) => (
        <MuiTextField
          fullWidth
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
          margin="dense"
          {...field}
          {...props}
        />
      )}
    />
  );
};
