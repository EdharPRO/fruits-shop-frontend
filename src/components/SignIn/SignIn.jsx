import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Paper, Stack,
  TextField,
  Typography
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

export const SignIn = () => {
  return (
      <Box
          sx={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            boxShadow: '25px'
          }}
      >
        <Paper elevation={0} sx={{ padding: 3 }}>
          <Stack spacing={1}
                 sx={{
                   justifyContent: 'center',
                   alignItems: 'center'
                 }}
          >
            <Avatar sx={{ bgcolor: "tomato" }} >
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
      </Box>
  );
};