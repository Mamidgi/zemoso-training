import { createTheme, Typography } from "@mui/material";

const theme=createTheme(
    {
        typography:{
            fontFamily:'Montserrat',
            h1:{
                fontSize: '36px',
                fontWeight: 700,
                lineHeight: '1.2',
            },
            body1:{
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '1.5',
            },
            body2:{
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '1.6',
            },
        },
         components:{
            MuiPaper:{
                styleOverrides:{
                 root:{
                        width: '571px',
                        height: '144px',
                        borderRadius: '12px',
                        boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.05)',
                        marginBottom: '24px',
                    }
                }
             },
             MuiStack:{
                styleOverrides:{
                root:{
                    marginTop:'10px;'
                }
            }
            }
               
            },
          
          
        }
);

export default theme;