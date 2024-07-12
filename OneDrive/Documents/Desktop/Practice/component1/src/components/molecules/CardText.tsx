import React from "react";
import { Stack,Typography } from "@mui/material";
import {TEXT} from '../../Constants/Texts';
import Text from "../atoms/Text";


const CardText: React.FC=()=>{
    return(
        <Stack direction='row' spacing={26}>
            <div className='text'>
                <Text variant='h1'>{TEXT.TITLE}</Text>
                <Text variant='body1'>{TEXT.COMPANY}</Text>
                <Text variant='body2'>{TEXT.LOCATION}</Text>
            </div>
        <div className='more'>

        </div>
        </Stack>
    )
}

export default CardText;