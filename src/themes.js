import { createMuiTheme} from '@material-ui/core';

const useThemes = createMuiTheme({
  palette: {
    primary: {
      main: "#043565"
    },
    secondary: {
      main: "#671504"
    }
  },
  typography: {
    fontFamily: [
        "Montserrat",
        "Helvetica Neue",
        "Arial",
        "sans-serif"
    ].join(','),
  }
});

//cool color #862238
export default useThemes;