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
  name: yup.string().min(6).required(),
  card: yup.number().required(),
  date: yup.number().min(6).required(),
  cvv: yup.number().min(3).required()
}).required();

export const Payment = ({ onBack, onComplete }) => {
  const form = useForm({
    mode: 'onBlur'
    // resolver: yupResolver(validationSchema)
  });

  const handleSubmit = (data) => {
    onComplete({ payment: data });
  };

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(handleSubmit)}>
        <Grid container spacing={1} sx={{ padding: 0 }}>
          <Grid item xs={12} md={6}>
            <TextField
              required
              name="name"
              label="Name on card"
              placeholder="Name on card"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="card"
              label="Card number"
              placeholder="Card number"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="date"
              label="Expiry date"
              placeholder="Expiry date"
            />
          </Grid>

          <Grid item xs={12} md={6}>
            <TextField
              required
              name="cvv"
              label="CVV"
              placeholder="CVV"
              variant="standard"
            />
          </Grid>
        </Grid>

        <Stack direction="row" justifyContent="flex-end" spacing={1}>
          <Button onClick={onBack}>
            Back
          </Button>

          <Button onClick={onComplete} variant="contained" type="submit">
            Complete order
          </Button>
        </Stack>
      </form>
    </FormProvider>
  );
};