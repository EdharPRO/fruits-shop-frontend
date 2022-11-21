import { Box, ImageListItem, Paper, Typography } from '@mui/material';
import { db as titleForFact } from './db';

export const Facts = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        backgroundColor: 'white',
        padding: 1
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 4,
          mt: 3,
          mb: 3,
          flexWrap: 'wrap'
        }}
      >
        {titleForFact.map((item) => (
          <Box
            key={item.id}
            sx={{
              display:'flex',
              flexDirection:'row'
            }}
          >
            <Box sx={{
              backgroundColor:'tomato',
              width:70,
              height:70,
              display: 'flex',
              justifyContent:'center',
              alignItems:'center',
              borderRadius: 2 }}
            >
              <ImageListItem sx={{
                width:35,
                height:35
                // backgroundColor: 'white'
              }}>
                <img alt={'car'} src={item.img}/>
              </ImageListItem>
            </Box>

            <Box
              sx={{ ml:2,
                display:'flex',
                flexDirection:'column',
                gap:1
              }}
            >
              <Typography sx={{ fontWeight:900, mt:1 }}>{item.Name}</Typography>
              <Typography sx={{ fontWeight:400 }}>{item.Suname}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Paper>
  );
};