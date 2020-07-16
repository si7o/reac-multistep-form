import { createMuiTheme } from "@material-ui/core"

export const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#0394F3",
            dark: "#0065B9",
            light: "#A7DCFF",
        },
        secondary: { 
            main: "#46D9E2"
        },
        success: {
            main: "#00B760",
            dark: "#00833D",
            light: "#B3EBCA",
        },
        info: {
            main: "#00B6EE",
            dark: "#0078B7",
            light: "#B0E5F8",
        },
        error: {
            main: "#F04F3F",
            dark: "#B22C26",
            light: "#FDCFD4",
        },        
        warning: {
            main: "#FCB200",
            dark: "#D66A18",
            light: "#FEEBB3",
        },        
        brand: {
           main: "#E53320",
        },
        grey: {
           main: "#D1D3D1",
        },
    },
    props: {
        MuiButton: {
            variant: "contained",
        },
        MuiTextField: {
            variant: "outlined",
        }
    },

    overrides: {
        MuiButton: {
        },
        MuiAppBar: {        
            colorPrimary: {
                backgroundColor: "#E53320",
            },
        },
    }
})
