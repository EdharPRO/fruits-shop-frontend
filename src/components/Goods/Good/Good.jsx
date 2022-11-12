import { useContext } from 'react';
import { Card, Button, CardMedia, Typography, CardContent, CardActions, Paper } from '@mui/material';
import { PurchasesContext } from '../../../modules/purchases';

export const Good = ({ product }) => {
    const { buyProduct } = useContext(PurchasesContext);

    const handleBuy = () => {
        buyProduct(product);
    };

    return (
        <Paper elevation={3} sx={{ mt:2 }}>
            <Card
                product={product.id}
                sx={{ padding: 1 }}
            >
                <CardMedia
                    component="img"
                    image={product.img}
                    sx={{ width: 170, height:150 }}
                    alt="fruit"
                />
                <CardContent>
                    <Typography >{product.category}</Typography>
                    <Typography >{product.name}</Typography>
                    <Typography >${product.price}.00</Typography>
                    <Typography >{product.weight} KG</Typography>
                </CardContent>
                <CardActions>
                    <Button
                        size="small"
                        sx={{ backgroundColor:'tomato' }}
                        variant={'contained'}
                        onClick={handleBuy}
                    >ADD</Button>
                </CardActions>
            </Card>
        </Paper>
    );
};
