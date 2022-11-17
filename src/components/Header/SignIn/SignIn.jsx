import { forwardRef, useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Avatar,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  IconButton,
  Paper,
  Slide,
  Stack,
  Typography
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { TextField } from '../../TextField';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const validationSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required()
}).required();

export const SignIn = () => {
  const [ open, setOpen ] = useState(false);
  const form = useForm({
    mode: 'onBlur',
    resolver: yupResolver(validationSchema)
  });

  const signIn = (data) => {
    console.log(data);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen} color="inherit">
        <AccountCircleIcon />
      </IconButton>

      <Dialog
        open={open}
        maxWidth="xs"
        TransitionComponent={Transition}
        onClose={handleClose}
      >
        <Paper elevation={0} sx={{ padding: 3 }}>
          <Stack
            spacing={1}
            sx={{
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <Avatar sx={{ bgcolor: 'tomato' }} >
              <LockIcon />
            </Avatar>

            <Typography variant="subtitle1">Sign In</Typography>

            <FormProvider {...form}>
              <form noValidate onSubmit={form.handleSubmit(signIn)}>
                <TextField
                  required
                  name="email"
                  type="email"
                  label="E-mail"
                  placeholder="Enter e-mail..."
                  margin="dense"
                />

                <TextField
                  required
                  name="password"
                  type="password"
                  label="Password"
                  placeholder="Enter password..."
                  margin="dense"
                />

                <FormControlLabel
                  label="Remember Me"
                  margin="dense"
                  control={<Checkbox />}
                />

                <Button type="submit" variant="contained">Sign In</Button>
              </form>
            </FormProvider>
          </Stack>
        </Paper>
      </Dialog>
    </>
  );
};
