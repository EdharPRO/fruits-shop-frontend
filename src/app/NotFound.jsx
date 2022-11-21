import { Box, Container, Typography } from '@mui/material';

export const NotFound = () => {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%'
        }}
      >
        <Typography color='white' variant="h2" >404 Not Found :(</Typography>
      </Box>
    </Container>
  );
};
