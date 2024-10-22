import { colors, createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: colors.brown[900],

      },
      secondary: {
        main: colors.teal[900],

      },
    },
    typography: {
        fontFamily: "Roboto"
    }
  });

  theme = responsiveFontSizes(theme)
  export default theme;