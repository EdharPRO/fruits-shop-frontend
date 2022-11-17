import { forwardRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Dialog,
  FormControlLabel,
  IconButton,
  Paper,
  Slide,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const SignIn = () => {
  const [ open, setOpen ] = useState(false);
  const {
    register,
    formState: {
      errors
    },
    handleSubmit,
    reset
  } = useForm({
    mode: "onBlur"
  });

  const signIn = (data) => {
    console.log(data);
    reset();
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

            <form onSubmit={handleSubmit(signIn)}>
              <TextField
                  {...register("Email", {
                    required: "Write your e-mail, please",
                    minLength: {
                      message: "Minimum 5 letters",
                      value: 5
                    }
                  })}

                  sx={{ mb: 2 }}
                  type="text"
                  label="E-mail"
              />
              <Box>
                {errors?.Email && <Typography variant="subtitle2">{errors?.Email?.message }</Typography>}
              </Box>

              <br />
              <TextField
                  {...register('Password', {
                    required: "Write your password, please",
                    minLength: {
                      message: "Minimum 5 letters",
                      value: 5
                    }
                  })}

                  sx={{ mb: 2 }}
                  type="password"
                  label="Password"
              />
              <Box>
                {errors?.Password && <Typography variant="subtitle2">{errors?.Password?.message }</Typography>}
              </Box>

              <br />
              <FormControlLabel
                  sx={{ mb: 1 }}
                  control={<Checkbox />}
                  label="Remember Me"
              />
              <br />
              <Button type="submit" variant="contained">Sign In</Button>
            </form>
          </Stack>
        </Paper>
      </Dialog>
    </>
  );
};
