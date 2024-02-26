import { createTheme } from "@mui/material";

export const theme=createTheme({
    palette:{
        primary:{
            main:'#111430',
            yello:'#FBD062',
            green:'81D200'
        }
    },
    components:{
        MuiContainer:{
            defaultProps:{
                maxWidth:'lg'
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    fontSize:'1rem',
                    padding:'0.6rem 2.5rem'
                }
            },
            defaultProps:{
                variant:'contained',
                color:'primary'
            }
        }
    }




})