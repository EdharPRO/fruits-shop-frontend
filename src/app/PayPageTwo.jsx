import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Avatar, Box,
  Button,
  Container, Grid,
  Paper,
  Stack,
  Typography
} from '@mui/material';
import PaymentIcon from '@mui/icons-material/Payment';
import { TextField } from '../components/TextField';

const validationSchema = yup.object().shape({
  name: yup.string().min(6).required(),
  card: yup.number().required(),
  date: yup.number().min(6).required(),
  cvv: yup.number().min(3).required()
}).required();

export const PayPage = () => {

  const form = useForm({
    mode: 'onBlur',
    resolver:yupResolver(validationSchema)
  });

  const signIn = (data) => {
    console.log(data);
  };

  return (
    <Container
      maxWidth='md'
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        textAlign:'center',
        mt: 3
      }}
    >
      <Paper elevation={0} sx={{ padding: 2, maxWidth: 500 }}>
        <Stack spacing={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Avatar sx={{ bgcolor: "tomato" }} >
            <PaymentIcon />
          </Avatar>
          <Typography variant="h5">Checkout</Typography>

          <FormProvider {...form}>
            <form noValidate onSubmit={form.handleSubmit(signIn)}>
              <Grid container spacing={1} sx={{ padding: 0 }}>
                <Grid item md={12}>
                  <Typography>Payment method</Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="name"
                    type="text"
                    label="Name on card"
                    placeholder="Name on card"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="card"
                    type="text"
                    label="Card number"
                    placeholder="Card number"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    // defaultValue="+380 " doesn`t work
                    name="date"
                    type="text"
                    label="Expiry date"
                    placeholder="Expiry date"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="cvv"
                    type="text"
                    label="CVV"
                    placeholder="CVV"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>


              </Grid>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button type="submit" variant="contained">Next</Button>
              </Box>
            </form>
          </FormProvider>
        </Stack>
      </Paper>
      {/*</Box>*/}
    </Container>
  );
};