import React from 'react';
import {Stack} from '@mui/material';
import {ICON} from '../../../constants/Icon';
import CardText from '../../molecules/CardText/CardText';
import CardIcon from '../../molecules/CardIcon/CardIcon';


const CardData:React.FC=()=>{
    return (
        <Stack direction='column' spacing='row'>
          <CardText/>
          <CardIcon/>
        </Stack>
    )
}

export default CardData;