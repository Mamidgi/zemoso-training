import React from "react";
import {Stack, Paper, ThemeProvider } from '@mui/material';
import CardTextComponent from '../molecules/CardText'
import Icons from '../molecules/Icons';
import Icon from "../atoms/Icon";
import CardData from "../organisms/CardData";
import theme from '../../Helper/theme';
import {ICONS} from '../../Constants/Icons';

const Card: React.FC=()=>{
    return(
        <ThemeProvider theme={theme}>
            <Paper>
                <Stack direction='row' spacing={3}>
                 <Icon src={ICONS.LOGO} height="45" alt="LOGO"/>
                <CardData/>
                </Stack>
            </Paper>
        </ThemeProvider>
    )
}
export default Card;