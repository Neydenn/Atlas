import {TextField} from "@mui/material";

interface CustomTextFieldProps {
    onChange: (value: string) => void;
    label: string;
    value: string;
};

const styleTextField = {
    '& .MuiOutlinedInput-root': {
        color: '#FFFFFF',
        '& fieldset': {
            borderColor: '#334155',
            borderRadius: '24px',
        },
        '&:hover fieldset': {
            borderColor: '#475569',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#3B82F6',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#94A3B8',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#3B82F6',
    },
}

export const CustomTextField = ({onChange, value, label}: CustomTextFieldProps) => {
    return (
        <TextField
            fullWidth
            value={value}
            sx={styleTextField}
            onChange={(e) => onChange(e.target.value)}
            label={label}
        />
    )
}