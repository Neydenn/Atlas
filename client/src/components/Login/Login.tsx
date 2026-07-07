import {Box, Button, TextField} from "@mui/material";
import {buttonStyle} from "../../shared/styles/button-style.ts";
import {styleAuthTextField} from "../../shared/styles/textField-style.ts";
import {useState} from "react";
import {sendLogin} from "./api/sendLogin.ts";

export const Login = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  })

  const handleClick = (key: string, newValue: string) => {
    setValue((prev) => ({
      ...prev,
      [key]: newValue,
    }))
  }

  const sendData = async () => {
    const responseData = await sendLogin(value);

  }

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <TextField
        label="email"
        fullWidth
        variant="outlined"
        sx={styleAuthTextField}
        onChange={(e) => handleClick("email", e.target.value)}/>
      <TextField
        label="password"
        fullWidth
        variant="outlined"
        sx={styleAuthTextField}
        onChange={(e) => handleClick("password", e.target.value)}/>
      <Button
        variant="contained"
        fullWidth sx={buttonStyle}
        onClick={sendData}
      >
        Продолжить
      </Button>
    </Box>
  )
}