import { Box, Button, Stack, Typography, styled } from '@mui/material';
import React from 'react';
import img from '../../../ass/free-nature-images (1).jpg'


const Branding = styled(Box)(({ theme }) => ({
    height: '500px',
    backgroundColor: 'rgb(122,178,89,0.50)',
    padding: theme.spacing(4),
    clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
    display:'flex',
    justifyContent:'space-between',
    gap:'25px',
    alignItems:'center'
}))


const Granding = () => {
    return (
        <Branding>
        <Box>
            <Stack spacing={4} >
            <Typography sx={{
                fontSize:'2.5rem',
                my:2,
                fontWeight:'bold'
            }}>Let's Grow Yout Brand <br/> To The Next Level</Typography>
            <Typography> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </Typography>
            <Button
            sx={{
                width:'70%'
            }}
            >hire us</Button>
            </Stack>
            </Box>
        <Box sx={{
            width:'100%',
            display:{
                xs:'none',
                sm:'none',
                md:'block'
            }
        }} >
            <img src={img} alt='' style={{width:'100%'}} />
        </Box>
        </Branding>
    );
};

export default Granding;