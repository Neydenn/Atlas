import {Box} from "@mui/material";
import {useState} from "react";
import {type AuthMode, AuthSwitch} from "../../shared/ui/AuthSwitch.tsx";
import {AuthLogin} from "../../features/AuthLogin/ui/AuthLogin.tsx";
import {AuthRegister} from "../../features/AuthRegister/ui/AuthRegister.tsx";

export const AuthPage = () => {
    const [authMode, setAuthMode] = useState<AuthMode>("login")

    return (
        <Box sx={{
            display: 'flex',
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#16181A',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: '#222725',
                width: '100%',
                maxWidth: '40%',
                p: 10,
                borderRadius: '32px',
                border: '1px solid #948B8B'
            }}>
                <AuthSwitch
                    value={authMode}
                    onChange={setAuthMode}
                />
                {authMode === "login" && (
                    <AuthLogin />
                )}
                {authMode === "register" && (
                    <AuthRegister />
                )}
            </Box>
        </Box>
    )
}
