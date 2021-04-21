import { createMuiTheme } from "@material-ui/core/styles/";

const appTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#1E5FA4",
            light: "#6BB7D0 ",
            dark: "#133C55",
        },
        secondary: {
            main: "#1E5FA4",
            light: "#6BB7D0 ",
            dark: "#133C55",
        }
    },
    typography: {
        fontFamily: ['"Open Sans"', 'Roboto'].join(','),
    }
});

export default appTheme;