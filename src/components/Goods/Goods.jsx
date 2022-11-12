import { useContext } from 'react';
import { IconButton, Box, Paper, Typography, CircularProgress } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

                <div>
                    <IconButton aria-label="left">
                        <ChevronLeftIcon fontSize="medium" color="primary" />
                    </IconButton>

                    <IconButton aria-label="right">
                        <ChevronRightIcon fontSize="medium" color="primary" />
                    </IconButton>
                </div>
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
                    <Box
                        sx={{
                            display: 'flex',
                            gap: 10,
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        {products.map((product) => (
                            <Good key={product.id} product={product} />
                        ))}
                    </Box>
                ) : (
                    <Typography align="center">Products not found</Typography>
                )
            )}
        </Paper>
    );
};


