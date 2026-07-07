import {Box, Button} from "@mui/material";
import {AuthSwitch} from "../../shared/AuthSwitch.tsx";
import {useState} from "react";
import type {authType} from "../../shared/constants/auth-type.ts";
import {Login} from "../../components/Login/Login.tsx";

export const AuthPage = () => {
  const [authMode, setAuth] = useState<authType>("login");

  return (
    <Box sx={{
      display: "flex",
      minHeight: "100vh",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: "#16181A",
    }}>
      <Box sx={{
        display: 'flex',
        width: '100%',
        maxWidth: '40%',
        backgroundColor: "#222725",
        border: "1px solid #948B8B",
        borderRadius: 12,
        flexDirection: 'column',
        p: 6
      }}>
        <AuthSwitch onChange={setAuth} value={authMode} />
        { authMode === "login" ?
          <Login /> :
          <Box />
        }
      </Box>
    </Box>
  )

}