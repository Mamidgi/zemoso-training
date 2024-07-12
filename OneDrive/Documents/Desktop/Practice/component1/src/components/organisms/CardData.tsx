// import React from "react";
// import { Stack} from '@mui/material';
// import Icons from '../molecules/Icons';
// import CardText from '../molecules/CardText';

// const CardText: React.FC=()=>{
//     return(
//         <Stack direction='column' spacing={3}>
//             <CardText/>
//             <Icons/>
//         </Stack>

//     )
// }


import React from "react";
import { Stack } from '@mui/material';
import Icons from '../molecules/Icons';


const CardText: React.FC = () => {
    return (
        <Stack direction='column' spacing={3}>
            <CardText/>
            <Icons />
        </Stack>
    )
}

export default CardText;
