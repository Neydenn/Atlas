import {Alert, Snackbar} from "@mui/material";

interface AlertNotificationProps {
  value: boolean;
  setValue: (value: boolean) => void;
}

export const AlertNotification = ({ value, setValue}: AlertNotificationProps) => {
  return (
    <Snackbar
      open={value}
      autoHideDuration={3000}
      onClose={() => setValue(false)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center',
      }}
    >
      <Alert
        severity="error"
        onClose={() => setValue(false)}
      >
        Заполните все поля
      </Alert>
    </Snackbar>
  )
}