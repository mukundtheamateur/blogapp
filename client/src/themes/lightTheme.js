import { createTheme } from "@mui/material";

export default createTheme({
    palette: {
        primary: {
            main: "#111111",
        },
        secondary: {
            main: "#ffb300"
        },
        text: {
            light: "#f5f5f5",
            primary: "#9cc700"
        }
    },
    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
                variant: "outlined",
                margin: "dense",
                fullWidth: true,
                InputLabelProps: {
                    shrink: true,
                    color: 'warning'
                }
            }
        },
        MuiButton: {
            defaultProps: {
                size: "small",
                variant: "contained",
            },
            styleOverrides: {
                root: {
                    textTransform: 'none',
                    color: '#fff'
                }
            }
        },
        MuiCard: {
            variants:[
                {
                    props: {variant: 'shaded'},
                    style: {
                        backgroundColor: "#E0E0D9", 
                        borderRadius: '10px',
                    }
                }
            ]
        },
        MuiTypography:{
            defaultProps: {
                align: 'left'
            }
        },
        MuiPaper: {
            styleOverrides: {
                root:{
                    padding: 8
                }
            }
        },
        MuiAppBar: {
            styleOverrides: {
                root: {
                    padding: 0
                }
            }
        },
        MuiList: {
            styleOverrides: {
                root: {
                    backgroundColor: '#111111'
                }
            }
        },
        MuiListItemText: {
            styleOverrides: {
                root: {
                    color: '#1fbfc1'
                }
            }
        },
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: '#1fbfc1',
                    backgroundColor: '#EFF0D1',
                    borderRadius: '50%',
                }
            }
        }
    }
})