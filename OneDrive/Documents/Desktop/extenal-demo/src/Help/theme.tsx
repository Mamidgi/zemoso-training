import { createTheme } from "@mui/material"


const theme=createTheme({
  typography:{
    fontFamily:'monospace',
    h1:{
        fontSize:'20px',
        fontWeight:500,
        lineHeight:'30px',
     
    },
    h3:{
        fontSize:'12px',
        fontWeight:700,
        lineHeight:'16px',
        color:'#656E66',
        marginTop:'1rem'
    },
     body1:{
        fontSize:'12px',
        fontWeight:500,
        lineHeight:'16px',
        color:'#FF725E',
        marginTop:'0.4rem',
         marginRight:'220px',
     },
     body2:{
        fontSize:'12px',
        fontWeight:500,
        lineHeight:'16px',
        color:'#656E66',
        marginTop:'0.2rem',
        marginRight:'52px',
     },
  },
  
  components:{
    MuiPaper :{
        styleOverrides :{
            root:{
                width:"571px",
                height:"159px",
                padding: '16px 19px 16px 19px',
                borderRadius:'12px',
                justifyContent:"center",
                gap: '10px',
                margin: '15% 30%',

            },
        },
    },
    MuiStack:{
        styleOverrides:{
            root:{
                marginTop:'10px',     
            },
        },
    }
  }
})

export default theme;


