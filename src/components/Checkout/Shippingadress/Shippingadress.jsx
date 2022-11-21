import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack
} from '@mui/material';
import { TextField } from '../../TextField';

const validationSchema = yup.object().shape({
  name: yup.string().required(),
  surname: yup.string().required(),
  address: yup.string().required(),
  city: yup.string().min(4).required(),
  country: yup.string().required()
}).required();

export const Shippingadress = () => {

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
          <FormProvider {...form}>
            <form noValidate onSubmit={form.handleSubmit(signIn)}>
              <Grid container spacing={1} sx={{ padding: 0 }}>
                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="name"
                    type="text"
                    label="Name"
                    placeholder="Name"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="surname"
                    type="text"
                    label="Surname"
                    placeholder="Surname"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={12}>
                  <TextField
                    required
                    name="address"
                    type="text"
                    label="Address"
                    placeholder="Address"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="city"
                    type="text"
                    label="City"
                    placeholder="City"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    name="state"
                    type="text"
                    label="State/Province/Region"
                    placeholder="State/Province/Region"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    name="zip"
                    type="text"
                    label="Zip / Postal code"
                    placeholder="Zip / Postal code"
                    margin="dense"
                    variant="standard"
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <TextField
                    required
                    name="country"
                    type="text"
                    label="Country"
                    placeholder="Country"
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
    </Container>
  );
};