import {Box, Button, IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import {buttonStyle, styleAuthTextField} from "../styles/styleAuthTextField.ts";
import {useState} from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import type {AuthLoginFormType} from "../models/auth-login-form.type.ts";
import {login} from "../api/login.ts";

export const AuthLogin = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [visiblePassword, setVisiblePassword] = useState<boolean>(false)

    const handleClick = () => {
        if (!password && !email) throw new Error("password or email is empty");

        const data: AuthLoginFormType = {
            email,
            password
        }

        console.log(login(data));
    }

    return (
        <Box>
            <Typography sx={{ textAlign: 'center', color: '#F5F2E8', mb: 4, fontWeight: 'bold' }} variant="h4">Вход</Typography>
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