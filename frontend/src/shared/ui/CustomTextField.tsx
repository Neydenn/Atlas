import {Grid, TextField} from "@mui/material";

interface CustomTextFieldProps {
    onChange: (value: string) => void;
    label: string;
    value: string | number;
    isTypeNumber?: boolean;
}

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

export const CustomTextField = ({onChange, value, label, isTypeNumber}: CustomTextFieldProps) => {
    return (
        <Grid sx={{ p: 2, mt: 4 }}>
            <TextField
                fullWidth
                value={value}
                sx={styleTextField}
                onChange={(e) => onChange(e.target.value)}
                label={label}
                {...(isTypeNumber ? { type: "number" }: {})}
            />
        </Grid>
    )
}