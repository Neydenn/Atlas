import { Box, TextField, Typography } from "@mui/material";
import type {TimeFormData} from "../../features/ModalWindow/model/time-form-data.ts";

const durationCardSx = {
  height: 56,
  borderRadius: "16px",
  background:
    "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(30,41,59,0.75))",
  border: "1px solid #334155",
  display: "flex",
  alignItems: "center",
  px: 2,
  gap: 1.5,
  transition: "0.2s ease",

  "&:hover": {
    borderColor: "#475569",
  },

  "&:focus-within": {
    borderColor: "#3B82F6",
    boxShadow: "0 0 0 2px rgba(59,130,246,0.2)",
  },
};

const inputSx = {
  "& .MuiInputBase-root": {
    color: "#F8FAFC",
    fontSize: "18px",
    fontWeight: 600,
  },

  "& .MuiInputBase-input": {
    p: 0,
  },

  "& .MuiInputBase-input::placeholder": {
    color: "#64748B",
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
          color: "#94A3B8",
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