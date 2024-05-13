import CssBaseline from '@mui/material/CssBaseline'
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles'

export default function ThemeProvider({ children }: JSX.ElementChildrenAttribute) {
  const themeOptions = {
    palette: {
      primary: {
        main: '#3f51b5',
      },
      secondary: {
        main: '#f50057',
      },
      info: {
        main: '#5ED2DF',
      },
      error: {
        main: '#ff485d',
      },
      warning: {
        main: '#ff9800',
      },
      success: {
        main: '#48ff51',
      },
      text: {
        primary: '#2E262D',
      },
      // background: {
      //   default: '#fafafa',
      //   paper: '#ffffff',
      // },
      divider: '#b3b0d2',
    },
    shape: { borderRadius: 8 },
  }
  const theme = createTheme(themeOptions)

  return (
    <MUIThemeProvider theme={theme}>
      <>
        <CssBaseline />
        {children}
      </>
    </MUIThemeProvider>
  )
}
