import type {Components} from "@mui/material";
import {colors} from "../theme/colors.ts";

export const CustomButton: Components["MuiButton"] = {
  defaultProps: {
    size: 'medium',
    disableElevation: true,
  },
  styleOverrides: {
    root: {
      minHeight: 44,
      borderRadius: 10,
      textTransform: 'none',
      fontWeight: 700,
      paddingInline: 20,
      transition: 'background-color 160ms ease, border-color 160ms ease, box-shadow 160ms ease, transform 160ms ease',
      '&:focus-visible': {
        outline: `3px solid ${colors.brand[200]}`,
        outlineOffset: 2,
      },
    },
    contained: {
      backgroundColor: colors.brand[600],
      color: colors.neutral[0],
      '&:hover': {
        backgroundColor: colors.brand[700],
        boxShadow: '0 8px 18px rgba(66, 90, 101, 0.18)',
        transform: 'translateY(-1px)',
      },
      '&:active': {
        transform: 'translateY(0)',
      },
    },
    outlined: {
      borderColor: colors.neutral[300],
      color: colors.neutral[800],
      '&:hover': {
        borderColor: colors.brand[400],
        backgroundColor: colors.brand[50],
      },
    },
    text: {
      color: colors.brand[700],
      '&:hover': {
        backgroundColor: colors.brand[50],
      },
    },
  },
};
