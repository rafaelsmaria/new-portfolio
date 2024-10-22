import { colors, createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: colors.grey[900],

      },
      secondary: {
        main: colors.lightBlue[900],

      },
    },
    typography: {
        fontFamily: "Segoe UI"
    }
  });

  theme = responsiveFontSizes(theme)
  export default theme;