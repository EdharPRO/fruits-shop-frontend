import { palette } from './palette';

export const theme = {
  palette,

  components: {
    MuiCssBaseline: {
      styleOverrides: ({ palette }) => ({
        body: {
          backgroundColor: palette.secondary.main
        }
      })
    },

    MuiDialog: {
      styleOverrides: {
        paperWidthXs: {
          maxWidth: 280
        }
      }
    }
  }
};
