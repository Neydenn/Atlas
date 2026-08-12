import { createTheme } from '@mui/material/styles';
import {CustomButton} from "../button/CustomButton.tsx";
import {typography} from "../typography/CustomTypography.tsx";
import {colors} from "./colors.ts";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      light: colors.brand[400],
      main: colors.brand[600],
      dark: colors.brand[700],
      contrastText: colors.neutral[0],
    },
    info: {
      main: colors.info[500],
    },
    success: {
      main: colors.success[500],
    },
    warning: {
      main: colors.warning[500],
    },
    error: {
      main: colors.error[500],
    },
    background: {
      default: colors.neutral[50],
      paper: colors.neutral[0],
    },
    text: {
      primary: colors.neutral[900],
      secondary: colors.neutral[600],
    },
    divider: colors.neutral[200],
  },
  shape: {
    borderRadius: 12,
  },
  typography,
  components: {
    MuiButton: CustomButton,
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: colors.neutral[50],
          color: colors.neutral[900],
          WebkitFontSmoothing: 'antialiased',
        },
        '::selection': {
          backgroundColor: colors.brand[200],
          color: colors.brand[950],
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          minHeight: 48,
          borderRadius: 10,
          backgroundColor: colors.neutral[0],
          transition: 'box-shadow 160ms ease, background-color 160ms ease',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.neutral[300],
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.neutral[400],
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 3px ${colors.brand[100]}`,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: colors.brand[500],
            borderWidth: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: colors.neutral[600],
          '&.Mui-focused': {
            color: colors.brand[700],
          },
        },
      },
    },
  },
});
