import React from 'react';
import {Stack} from '@mui/material';
import  Icon from '../atoms/Icon';
import {ICONS} from '../../Constants/Icons';

const Icons: React.FC=()=>{
    return(
        <Stack direction='row' >
            <Icon src='ICONS.BIKE' height='21' alt='BIKE' />
            <Icon src='ICONS.BUS' height='21' alt='Bus' />
            <Icon src='ICONS.CAR' height='21' alt='CAR' />
            <Icon src='ICONS.TRAIN' height='21' alt='TRAIN' />
    
        </Stack>
    )
}

export default Icons;