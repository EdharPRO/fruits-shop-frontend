import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Avatar, Container, Paper, Stack } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PaymentIcon from '@mui/icons-material/Payment';
import { Shippingadress } from './Shippingadress';
import { Payment } from './Payment';
import { Review } from './Review';
import { PurchasesContext } from '../../modules/purchases';

const steps = [
  { name: 'Shipping address', component: Shippingadress },
  { name: 'Payment details', component: Payment },
  { name: 'Review your order', component: Review }
];

export const Checkout = () => {
  const { purchases, remAllPurchases } = useContext(PurchasesContext);
  const [ activeStep, setActiveStep ] = useState(0);
  const [ order, setOrder ] = useState({ purchases });

  const handleNext = (payload) => {
    setOrder((order) => ({ ...order, ...payload }));
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const completeOrder = (payload) => {
    handleNext(payload);
    remAllPurchases();
    console.log(order);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ py: 4 }}>
      <Paper elevation={0} sx={{ py: 2, px: 4 }}>
        <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar sx={{ bgcolor: 'primary.main', mb: 2 }} >
            <PaymentIcon />
          </Avatar>

          <Typography sx={{ mb: 2 }} variant="h5">Checkout</Typography>
        </Box>

        <Stepper alternativeLabel activeStep={activeStep} sx={{ mb: 4 }}>
          {steps.map(({ name }) => (
            <Step key={name}>
              <StepLabel>{name}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center', mt: 4 }}>
            <Typography variant="h5" gutterBottom>
              Thank you for your order.
            </Typography>

            <Typography variant="subtitle1">
              Your order number is #2001539. We have emailed your order
              confirmation, and will send you an update when your order has
              shipped.
            </Typography>

            <Button
              component={Link}
              to="/"
              sx={{ mt: 2 }}
              variant="contained"
            >
              Go to main
            </Button>
          </Box>
        ) : (
          <>
            {steps.map((Step, index) => activeStep !== index ? null : (
              <Step.component
                key={index}
                order={order}
                onBack={handleBack}
                onNext={handleNext}
                onComplete={completeOrder}
              />
            ))}
          </>
        )}
      </Paper>
    </Container>
  );
};
