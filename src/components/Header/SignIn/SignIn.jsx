import { forwardRef, useState } from 'react';
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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton color="inherit" onClick={handleClickOpen}>
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
              alignItems: 'center'
            }}
          >
            <Avatar sx={{ bgcolor: 'tomato' }} >
              <LockIcon />
            </Avatar>

            <Typography variant="subtitle1">Sign In</Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <TextField  sx={{ mb: 1 }} label="E-mail"/>
              <TextField type="password" label="Password" />
            </Box>

            <FormControlLabel control={<Checkbox />} label="Remember Me" />

            <Button variant="contained">Sign In</Button>
          </Stack>
        </Paper>
      </Dialog>
    </>
  );
};
