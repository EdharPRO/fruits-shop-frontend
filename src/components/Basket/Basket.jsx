import { useContext } from 'react';
import { Box, Button, Drawer, Typography, Paper } from "@mui/material";
import { Purchase } from "./Purchase";
import { PurchasesContext } from '../../modules/purchases';
import { Link } from 'react-router-dom';

export const Basket = ({ cartOpen, onClose }) => {
  const { purchases } = useContext(PurchasesContext);



  return (
    <Drawer
      color="primary"
      anchor="right"
      open={cartOpen}
      onClose={onClose}
      PaperProps={{
        sx: {
          width: 350,
          backgroundColor: "#66bb6a",
          justifyContent: 'space-between',
          justifyItems: 'center'
        }
      }}
    >
      {purchases.length > 0 ? (
        <Box
          display='flex'
          justifyContent={'center'}
          flexDirection='column'
          alignItems='center'
        >
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              mt: 2,
              width: '100%',
              padding: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography color='green' variant="button" >Shopping Bag</Typography>
          </Paper>

          <Paper
            elevation={0}
            sx={{
              mt: 2,
              width: '90%',
              padding: 4
            }}
          >
            {purchases.map((purchase) => (
              <Purchase
                key={purchase.id}
                purchase={purchase}
              />
            ))}
          </Paper>

          <Button
            component={Link}
            to="/pay"
            sx={{ mt: 2 }}
            variant="contained"
            onClick={onClose}
          >
            Checkout
          </Button>
        </Box>
      ) : (
        <Box>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              mt: 2,
              width: '100%',
              padding: 2,
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Typography color='green' variant="button" >Your shopping bag is empty</Typography>
          </Paper>
        </Box>
      )
      }

      <Button variant="contained" onClick={onClose}>Close</Button>
    </Drawer>
  );
};
