import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';

export const PayPage = () => {
  return (
      <Container
        maxWidth="xs"
        sx={{
          alignItems: 'center'
        }}
      >
        <Box
            sx={{
              justifyContent: 'center',
              padding: 2
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
                <PaymentIcon />
              </Avatar>
              <Typography variant="h5">Checkout</Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column' }} >
                <TextField sx={{ mb: 1 }} label="Name" variant="standard" />
                <TextField sx={{ mb: 0.5 }} label="Surname" variant="standard" />
                <TextField sx={{ mb: 2 }} label="City" variant="standard" />
                <TextField sx={{ mb: 2 }} defaultValue="+380 " label="Phone number" variant="standard" />
              </Box>

              <Button sx={{ margin: 10 }} variant="contained">Next</Button>
            </Stack>
          </Paper>
        </Box>
      </Container>
  );
};