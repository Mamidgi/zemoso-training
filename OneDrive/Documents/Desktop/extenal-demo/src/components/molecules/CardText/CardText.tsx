import React from 'react';
import {TEXT} from '../../../constants/Text';
import Text from '../../atoms/Text/Text';
import {Stack} from '@mui/material';
import {ICON} from '../../../constants/Icon';
import Icon from '../../atoms/Icon/Icon';

const CardText: React.FC=()=>{
     return(
        <Stack direction='row' spacing={26} >
        <div>
        <Text variant= 'h1'>{TEXT.TITLE}</Text>
        <Text variant='body1'>{TEXT.COMPANY}</Text>
        <Text variant='body2'>{TEXT.LOCATION}</Text>
        </div>
        
        <div>
            <Icon src={ICON.MORE} alt='more' height='24px' width='24px'/>
        </div>
        </Stack>
     )
}

export default CardText;
export{};
