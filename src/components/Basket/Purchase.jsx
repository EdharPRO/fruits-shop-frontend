import { Avatar, Box, Button, Divider, Stack, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useContext } from 'react';
import { PurchasesContext } from '../../modules/purchases';

export const Purchase = ({ purchase }) => {
  const { removePurchase } = useContext(PurchasesContext);

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: 260
        }}
      >
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
        >
          <IconButton color="secondary">
            <AddCircleOutlineIcon />
          </IconButton>

          <Typography>{purchase.count}</Typography>

          <IconButton color="secondary">
            <RemoveCircleOutlineIcon />
          </IconButton>
        </Stack>
        <Avatar
          src={purchase.product.img}
          sx={{
            width: 95, height: 90, mr: 2
          }}
        />
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <Typography>{purchase.product.name}</Typography>

          <Typography>${purchase.product.price}.00</Typography>
          <Button onClick={() => removePurchase(purchase.id)}>Remove</Button>
        </Box>
      </Box>
      <Divider variant='inset' />
    </Box>
  );
};
