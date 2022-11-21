import { Box, Button, List, ListItem, ListItemText, Container, Grid, Paper, Stack, Typography } from '@mui/material';
import { useContext } from 'react';
import { PurchasesContext } from '../../../modules/purchases';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99'
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45'
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51'
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11'
  },
  { name: 'Shipping', desc: '', price: 'Free' }
];

export const Review = () => {

  const { purchases } = useContext(PurchasesContext);

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
        <Stack
          spacing={1}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <Typography variant="subtitle1">Order summary</Typography>

          <List disablePadding>
            {purchases.map((purchase) => (
              <ListItem key={purchase.id} sx={{ py: 1, px: 0, minWidth: 300 }}>
                <ListItemText primary={purchase.product.name} secondary={purchase.product.price} />
                <Typography variant="body2">${purchase.product.price}.00</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
      </Paper>
    </Container>
  );
};
