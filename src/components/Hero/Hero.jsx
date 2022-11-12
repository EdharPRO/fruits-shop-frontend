import { Box, Button, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import foodPic from './foodPic.jpg';

export const Hero = () => {
    return(
        <Box
            sx={{
              backgroundImage:`url(${foodPic})`,
              backgroundRepeat: 'no-repeat',
              backgroundColor:'black',
              backgroundPosition:'center',
              backgroundSize:'cover',
              height:350,
              width:'100%',
              display: 'flex',
              justifyContent:'center',
              alignItems: 'center',
              mb: 2
            }}
        >
            <Box sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems: 'center',
                alignContent:'center',
                border:'1 solid red'
            }}>
                <Typography variant={"h6"} sx={{ color:'white' }}>
                    Best Grocery Shopping According To Your Desire
                </Typography>
                <Typography variant={"subtitle1"} sx={{ color:'white' }}>
                    SALE UP TO 80%
                </Typography>
                <Button variant={'contained'} sx={{ color:'white', backgroundColor:'tomato' }}>Shop Now<ArrowRightAltIcon/></Button>
            </Box>
        </Box>
    );
};