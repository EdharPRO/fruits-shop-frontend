import * as React from 'react';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, Button, Avatar, Container, Paper } from '@mui/material';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PaymentIcon from '@mui/icons-material/Payment';
import { Shippingadress } from './Shippingadress';
import { Payment } from './Payment';
import { Review } from './Review';
import { PurchasesContext } from '../../modules/purchases';


const steps = [ 'Shipping address', 'Payment details', 'Review your order' ];


export const Checkout = () => {

  const { remAllPurchases } = useContext(PurchasesContext);


  function getStepContent(step) {
    switch (step) {
    case 0:
      return <Shippingadress />;
    case 1:
      return <Payment />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
    }
  }

  const [ activeStep, setActiveStep ] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
      <Paper elevation={0} sx={{ padding: 2, mt: 6, mb: 6 }}>
        <Box sx={{ width: '100%' }}>

          <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar sx={{ bgcolor: "tomato", mb: 2 }} >
              <PaymentIcon />
            </Avatar>
            <Typography sx={{ mb: 2 }} variant="h5">Checkout</Typography>
          </Box>

          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
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
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </Paper>
    </Container>
  );
};
