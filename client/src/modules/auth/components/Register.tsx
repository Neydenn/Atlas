import {Box, Button, Checkbox, Divider, Stack, TextField, Typography} from "@mui/material";
import {AtlasIconSection} from "../../../shared/ui/atlasIcon-section/AtlasIconSection.tsx";
import {useState} from "react";
import {Link} from "react-router-dom";
import {register} from "../api/register.ts";
import {AlertNotification} from "../../../shared/ui/alert-notification/AlertNotification.tsx";

export const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [alertOpen, setAlertOpen] = useState<boolean>(false);


  const requestRegister = async () => {
    if (!email || !password) {
      setAlertOpen(true);
      return;
    }

    const data = await register({username, email, password});
    console.log(data);
  }

  return (
    <Box
      component='section'
      sx={{
        width: '100%',
        maxWidth: 440,
      }}
    >
      <AtlasIconSection />
      <Typography variant='h2' component='h1' sx={{ mb: 1 }}>
        Добро пожаловать!
      </Typography>
      <Typography color='text.secondary' sx={{ mb: 4 }}>
        Зарегистрируйтесь, чтобы продолжить работу в Atlas.
      </Typography>
      <Stack component='form' spacing={2.25}>
        <TextField
          fullWidth
          placeholder="Введите имя"
          label="Имя"
          autoComplete='Имя'
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
        />
        <TextField
          fullWidth
          placeholder="Введите email"
          label="Электронная почта"
          type='email'
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          placeholder="Введите пароль"
          label='Пароль'
          type='password'
          autoComplete="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Box
          sx={{
            display: "flex",
            width: '100%',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'inline-flex'}}>
            <Checkbox />
            <Typography variant="body1" sx={{ mt: 1 }}>Запомнить меня</Typography>
          </Box>
          <Typography
            variant="body1"
            sx={{
              cursor: 'pointer',
              mt: 1,
              '&:hover': {
                textDecoration: 'underline',
              }
            }}
          >
            Забыли пароль?
          </Typography>
        </Box>
        <Divider/>
        <Button
          variant='contained'
          onClick={() => requestRegister()}
        >
          Войти
        </Button>
        <Typography
          variant="body1"
          component={Link}
          to="/auth/login"
          sx={{
            textAlign: 'center',
            cursor: 'pointer',
            mt: 1,
            '&:hover': {
              textDecoration: 'underline',
            }
          }}
        >Есть аккаунта? Авторизоваться</Typography>
      </Stack>
      <AlertNotification value={alertOpen} setValue={setAlertOpen} />
    </Box>
  )
}