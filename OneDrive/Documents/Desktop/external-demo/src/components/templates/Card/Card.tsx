import React from 'react';
import CardData from '../../organisms/CardData/CardData';
import {Stack, ThemeProvider,Paper } from '@mui/material';
import theme from '../../../Help/theme';
import ICON from '../../../constants/Icon';
import Icon from '../../atoms/Icon/Icon';

const Card:React.FC=()=>{
    return(
       <ThemeProvider theme={theme}>
         <Paper>
           <Stack direction='row' spacing={3} >
             <Icon src={ICON.LOGO} alt='logo' height='45px' width='45px' />
             <CardData />
           </Stack>
        </Paper>
       </ThemeProvider>
   
    )
}

export default Card;