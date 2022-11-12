import { Box, Typography, Stack, styled } from "@mui/material";
import { green } from '@mui/material/colors';

export const Footer = () => {
    const primary = green.A700;

    const TextWhite = styled(Typography)({
        color:'white'
    });

    return (
        <Box sx={{ backgroundColor: primary }}>
          <Stack sx={{
              display:'flex',
              flexDirection: 'row',
              justifyContent:'center',
              alignItems:'center',
              gap: 10 }}
          >
              <Box>
                  <TextWhite>Categories</TextWhite>
                  <TextWhite>Fruits</TextWhite>
                  <TextWhite>Vegetables</TextWhite>
                  <TextWhite>Drinks</TextWhite>
              </Box>

              <Box>
                  <TextWhite>Categories</TextWhite>
                  <TextWhite>Fruits</TextWhite>
                  <TextWhite>Vegetables</TextWhite>
                  <TextWhite>Drinks</TextWhite>
              </Box>

              <Box>
                  <TextWhite>Home</TextWhite>
                  <TextWhite>Products</TextWhite>
                  <TextWhite>Sales</TextWhite>
                  <TextWhite>Contacts us</TextWhite>
              </Box>
          </Stack>
        </Box>
    );
};