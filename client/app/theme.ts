import { createTheme } from '@mui/material/styles';

// Define the colors
const primaryColor = '#633CFF';
const secondaryColor = '#BEADFF';
const backgroundColor = '#EFEBFF';
const textColor = '#333333';
const grayColor = '#737373';
const lightGrayColor = '#D9D9D9';
const whiteColor = '#FAFAFA';
const blackColor = '#333333';
const errorColor = '#FF3939';

const spacing = (factor: number) => `${factor * 0.8}rem`;

const theme = createTheme({
  // spacing: (factor:number) => spacing(factor),  
  spacing: (factor: number) => `${factor * 0.8}rem`,
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    background: {
      // TODO: use more appropriate backgrpound to make app look better
      default: whiteColor,
      paper: backgroundColor,
    },
    text: {
      primary: textColor,
      secondary: grayColor,
    },
    common: {
      black: blackColor,
      white: whiteColor,
    },
    error: {
      main: errorColor,
    },
    action: {
      disabled: lightGrayColor,
    }
  },
  typography: {
    fontFamily: 'Instrument Sans, Roboto, sans-serif',
    h1  : {
      fontSize: '2rem',
      fontWeight: 600,
      color: blackColor,
    },
    h2: {
      fontSize: '3.2rem',
      fontWeight: 700,
      color: blackColor,
      lineHeight: '150%',
      '@media (max-width:600px)': {
        fontSize: '2.4rem',
      },
    },
    h3:{
      fontSize: '1.6rem',
      fontWeight: 600,
      lineHeight: '150%',
      fontStyle: 'normal',
      color: blackColor,
      '@media (max-width:600px)': {
        fontSize: '1.2rem',
      },

    },
    h4: undefined,
    h5: undefined,
    h6: undefined,
    body1:{
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: '150%',
      fontStyle: 'normal',
      color: grayColor
    },
    body2:{
      fontSize: '1.2rem',
      fontWeight: 400, 
      lineHeight: '150%',
      fontStyle: 'normal',
      color: grayColor,
    
      subtitle1:undefined,
      subtitle2:undefined,
    }
    // Add more typography styles as needed
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          // Primary button styles
          height: '4rem',
          '&.MuiButton-contained': {
            background: `var(--Purple, ${primaryColor})`,
            '&:active': {
              background: `var(--purple-hover-color, ${secondaryColor})`,
              boxShadow: `0px 0px ${spacing(4)} 0px rgba(99, 60, 255, 0.25)`,
            },
          },
          // Outlined button styles
          '&.MuiButton-outlined': {
            border: `1px solid var(--Purple, ${primaryColor})`,
            '&:active': {
              background: `var(--Light-Purple, ${backgroundColor})`,
            },
          },
          '&.Mui-disabled': {
            backgroundColor: lightGrayColor,
            color: textColor,
          },
        },
      },
    },
  },
});

export default theme;
 