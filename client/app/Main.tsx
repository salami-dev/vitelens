"use client";
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, StyledEngineProvider } from '@mui/material';
import GlobalStyle from './GlobalStyle';
import theme from './theme';
import Tanstack from "./utils/Tanstack"; 


const Main = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <StyledEngineProvider injectFirst>
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      <GlobalStyle />
      <Tanstack>
      {children}
      </Tanstack>
    </ThemeProvider>
  </StyledEngineProvider>
  )
}

export default Main