import { Box, TextField, Typography } from "@mui/material";
import type {TimeFormData} from "../../features/ModalWindow/model/time-form-data.ts";

const durationCardSx = {
  height: 56,
  borderRadius: "16px",
  background:
    "linear-gradient(145deg, rgba(22,24,26,0.95), rgba(34,39,37,0.78))",
  border: "1px solid #3A463F",
  display: "flex",
  alignItems: "center",
  px: 2,
  gap: 1.5,
  transition: "0.2s ease",

  "&:hover": {
    borderColor: "#526157",
  },

  "&:focus-within": {
    borderColor: "#2E8F7D",
    boxShadow: "0 0 0 2px rgba(46,143,125,0.22)",
  },
};

const inputSx = {
  "& .MuiInputBase-root": {
    color: "#F5F2E8",
    fontSize: "18px",
    fontWeight: 600,
  },

  "& .MuiInputBase-input": {
    p: 0,
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#7F897F",
    opacity: 1,
  },

  "& input[type=number]": {
    MozAppearance: "textfield",
  },

  "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
    {
      WebkitAppearance: "none",
      margin: 0,
    },
};

interface TimeCountTextFieldProps {
    label: string;
    value: string;
    name: keyof TimeFormData;
    onChange: (name: keyof TimeFormData, value: string) => void;
}

export const TimeCountTextField = ({ label, name, onChange, value }: TimeCountTextFieldProps) => {
  return (
    <Box sx={durationCardSx}>
      <Typography
        sx={{
          color: "#A7B0A6",
          fontSize: "13px",
          fontWeight: 600,
          minWidth: "48px",
        }}
      >
        {label}
      </Typography>

      <TextField
        fullWidth
        variant="standard"
        type="number"
        placeholder="0"
        value={value}
        InputProps={{ disableUnderline: true }}
        sx={inputSx}
        onChange={(e) => onChange(name, e.target.value)}
      />
    </Box>
  );
}
