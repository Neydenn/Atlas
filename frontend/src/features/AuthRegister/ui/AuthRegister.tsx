import {Box, Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {useState} from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import {buttonStyle, styleAuthTextField} from "../../AuthLogin/styles/styleAuthTextField.ts";

export const AuthRegister = () => {
    const [email, setEmail] = useState<string | null>(null);
    const [password, setPassword] = useState<string | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)


    return (
        <Box>
            <Typography sx={{ textAlign: 'center', color: '#F5F2E8', mb: 4, fontWeight: 'bold' }} variant="h4">Регистрация</Typography>
            <TextField
                fullWidth
                label="Введите ваше имя"
                required
                sx={styleAuthTextField}
                onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
                fullWidth
                label="Введите email"
                sx={styleAuthTextField}
                required
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                fullWidth
                label="Введите пароль"
                required
                type={visiblePassword ? 'text' : 'password'}
                sx={styleAuthTextField}
                onChange={(e) => setPassword(e.target.value)}
                slotProps={{
                    input: {
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setVisiblePassword(prev => !prev)} sx={{color: '#F5F2E8'}}>
                                    {visiblePassword ? <VisibilityOffIcon/> : <VisibilityIcon />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }
                }}
            />
            <Button sx={buttonStyle} fullWidth>Продолжить</Button>
        </Box>
    )
}