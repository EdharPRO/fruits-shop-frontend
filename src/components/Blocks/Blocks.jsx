import { Box, Button, Stack, styled, Typography } from "@mui/material";
import peanats from './peanats.png';
import eggs from './eggs.png';

export const Blocks = () => {
  const StyledBox = styled(Box)({
    height: 300,
    weight: '100%',
    cursor: 'pointer',
    backgroundColor:'white',
    backgroundRepeat:'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',

    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center'
  });

  const StyledTypography = styled(Typography)({
    background: 'white',
    opacity:'0.8',
    fontSize:'24px',
    fontWeight: 900,
    margin: '40px 150px 10px 150px'
  });

  return (
    <Box sx={{
      display:'flex',
      justifyContent:'center'
      // mt: 5,
      // borderTop: 20,
    }}>
      <Stack direction={{ xs: 'column', lg: 'row' }} spacing={{ sx: 1, sm: 2, md: 4 }} gap={3}>
        <StyledBox sx={{ backgroundImage: `url(${peanats})` }}>
          <StyledTypography align="center" variant="h3">
                    You can buy what you want
          </StyledTypography>
          {/*<StyledTypography align={'center'} variant={'h3'}>Just make a click</StyledTypography>*/}
          <Button variant={'text'}>Click here</Button>
        </StyledBox>

        <StyledBox sx={{ backgroundImage: `url(${eggs})` }}>
          <StyledTypography align={'center'} variant={'h3'}>You can buy what you want</StyledTypography>
          {/*<StyledTypography align={'center'} variant={'h3'}>Just make a click</StyledTypography>*/}
          <Button variant={'text'}>Click here</Button>
        </StyledBox>
      </Stack>
    </Box>
  );
};
