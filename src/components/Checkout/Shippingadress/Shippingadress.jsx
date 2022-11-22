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

export const Shippingadress = ({ onNext }) => {
  const form = useForm({
    mode: 'onBlur'
    // resolver: yupResolver(validationSchema)
  });

  const handleSubmit = (data) => {
    onNext({ address: data });
  };

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="name"
              label="Name"
              placeholder="Name"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="surname"
              label="Surname"
              placeholder="Surname"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} md={12}>
            <TextField
              required
              name="address"
              label="Address"
              placeholder="Address"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="city"
              label="City"
              placeholder="City"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="state"
              label="State/Province/Region"
              placeholder="State/Province/Region"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              name="zip"
              label="Zip / Postal code"
              placeholder="Zip / Postal code"
              variant="standard"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="country"
              label="Country"
              placeholder="Country"
              variant="standard"
            />
          </Grid>
        </Grid>

        <Stack direction="row" justifyContent="flex-end" sx={{ mt: 2 }}>
          <Button variant="contained" type="submit">
            Next
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};