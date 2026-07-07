import {Box, Typography} from "@mui/material";
import type {authType} from "./constants/auth-type.ts";

interface AuthSwitchProps {
  onChange: (value: authType) => void;
  value: authType;
}

export const AuthSwitch = ({ onChange, value }: AuthSwitchProps) => {
  const isLogin: boolean =
    'login' === value;
  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        width: "100%",
        mb: 4,
        p: "4px",
        borderRadius: "28px",
        backgroundColor: "#16181A",
        border: "1px solid #3A463F",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 4,
          left: isLogin ? 4 : "calc(50% + 0px)",
          width: "calc(50% - 4px)",
          height: "calc(100% - 8px)",
          borderRadius: "24px",
          backgroundColor: "#2E8F7D",
          transition: "left 0.25s ease",
          boxShadow: "0 4px 18px rgba(46, 143, 125, 0.35)",
        }}
      />

      <Box
        onClick={() => onChange("login")}
        sx={{
          zIndex: 1,
          flex: 1,
          py: 1.4,
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: isLogin ? "#F5F2E8" : "#A7B0A6",
            transition: "color 0.25s ease",
          }}
        >
          Авторизация
        </Typography>
      </Box>

      <Box
        onClick={() => onChange('register')}
        sx={{
          zIndex: 1,
          flex: 1,
          py: 1.4,
          textAlign: "center",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            color: !isLogin ? "#F5F2E8" : "#A7B0A6",
            transition: "color 0.25s ease",
          }}
        >
          Регистрация
        </Typography>
      </Box>
    </Box>
  )
}