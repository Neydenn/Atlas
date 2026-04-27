import {Grid, TextField} from "@mui/material";

interface CustomTextFieldProps {
    onChange: (value: string) => void;
    label: string;
    value: string | number;
    isTypeNumber?: boolean;
}

const styleTextField = {
    '& .MuiOutlinedInput-root': {
        color: '#F5F2E8',
        '& fieldset': {
            borderColor: '#3A463F',
            borderRadius: '24px',
        },
        '&:hover fieldset': {
            borderColor: '#526157',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#2E8F7D',
        },
    },
    '& .MuiInputLabel-root': {
        color: '#A7B0A6',
    },
    '& .MuiInputLabel-root.Mui-focused': {
        color: '#52B6A4',
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
