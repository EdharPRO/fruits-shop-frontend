import {Box, ImageListItem, Typography} from "@mui/material";
import car from './car.png';

export const Fact = (item) => {

    return (
            <Box sx={{
                display:'flex',
                flexDirection:'row',
            }}>
                <Box sx={{
                    backgroundColor:'tomato',
                    width:70,
                    height:70,
                    display: 'flex',
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius: 2
                }}>
                    <ImageListItem sx={{
                        width:35,
                        height:35}}>
                        <img alt={'car'} src={car}/>
                    </ImageListItem>
                </Box>

                <Box sx={{ml:2,
                display:'flex',
                flexDirection:'column',
                gap:1,}}>
                    <Typography sx={{fontWeight:900, mt:1}}>{item.Name}</Typography>
                    <Typography sx={{fontWeight:400}}>{item.Suname}</Typography>
                </Box>
            </Box>
    )
}