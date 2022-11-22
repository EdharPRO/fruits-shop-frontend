import { Button, List, ListItem, ListItemText, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export const Review = ({ order }) => {
  const totalPrice = order.purchases.reduce((sum, { product, count }) => {
    return sum + product.price * count;
  }, 0);


  return (
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
        {order.purchases.map((purchase) => (
          <ListItem key={purchase.id} sx={{ py: 1, px: 0, minWidth: 300 }}>
            <ListItemText primary={purchase.product.name} secondary={purchase.product.price} />
            <Typography variant="body2">${purchase.product.price}.00</Typography>
          </ListItem>
        ))}
      </List>

      <Typography>${totalPrice}.00</Typography>

      <Stack direction="row" justifyContent="flex-end" spacing={1}>
        <Button
          component={Link}
          to="/"
          sx={{ mt: 2 }}
          variant="contained"
        >
          Go to main
        </Button>
      </Stack>
    </Stack>
  );
};
