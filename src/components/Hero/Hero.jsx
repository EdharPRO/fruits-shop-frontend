import { Box, Button, Typography } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import foodPic from './foodPic.jpg';

export const Hero = () => {
  return (
    <Box
      sx={{
        background: `
          linear-gradient(rgba(0, 0, 0, .2) 100%, transparent),
          black url(${foodPic}) center / cover no-repeat
        `,
        color: 'common.white',
        height: 350,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        mb: 2
      }}
    >
      <Typography variant="h6" color="inherit">
        Best Grocery Shopping According To Your Desire
      </Typography>

      <Typography variant="subtitle1" color="inherit">
        SALE UP TO 80%
      </Typography>

      <Button
        variant="contained"
        endIcon={<ArrowRightAltIcon/>}
      >
        Shop Now
      </Button>
    </Box>
  );
};
