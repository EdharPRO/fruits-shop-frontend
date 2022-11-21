import { useContext } from 'react';
import { Box, Paper, Typography, CircularProgress, Grid } from '@mui/material';
import { green } from '@mui/material/colors';
import { ProductsContext } from '../../modules/products';
import { productCategory } from './db';
import { Good } from './Good';

export const Goods = ({ category }) => {
  const primary = green.A700;
  const { isFetched, products } = useContext(ProductsContext);

  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'white',
        padding: 3
      }}
    >
      <Box
        sx={{
          backgroundColor: primary,
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap'
          // display: { xs: 'none', flexDirection: 'column', md: 'flex' }
        }}
      >
        <Typography sx={{ fontWeight:900, fontSize:'24px', ml:15, color: 'white' }}>
          {category}
        </Typography>

        <Typography sx={{ fontWeight:300, ml:15, color: 'white' }}>
          {productCategory.subtitle}
        </Typography>
      </Box>

      {!isFetched ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            padding: 3
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        products.length ? (
          <Grid
            container
            justifyContent="center"
            alignItems="center"
          >
            {products.map((product) => (
              <Grid item key={product.id} padding={2}>
                <Good product={product} />
              </Grid>
            ))}
          </Grid>
        ) : (
          <Typography align="center">Products not found</Typography>
        )
      )}
    </Paper>
  );
};
