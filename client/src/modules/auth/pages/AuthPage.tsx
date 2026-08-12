import {Box} from "@mui/material";
import {colors} from "../../../shared/atlas-ui/theme/colors.ts";
import {AuthHero} from "../components/AuthHero.tsx";
import {Login} from "../components/Login.tsx";
import {type Location, useLocation} from "react-router-dom";
import type {locationType} from "../types/location-type.ts";
import {Register} from "../components/Register.tsx";

export const AuthPage = () => {
  const location: Location<locationType> = useLocation();

  return (
    <Box
      component="main"
      sx={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
        p: { xs: 0, sm: 3, lg: 5 },
        backgroundColor: colors.neutral[50],
        backgroundImage: `radial-gradient(circle at 10% 15%, ${colors.brand[100]} 0, transparent 28%), radial-gradient(circle at 90% 85%, #EDF2F4 0, transparent 26%)`,
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 1160,
          minHeight: { xs: '100vh', sm: 680 },
          display: 'grid',
          overflow: 'hidden',
          gridTemplateColumns: { xs: '1fr', md: '1.06fr 0.94fr' },
          border: { xs: 0, sm: `1px solid ${colors.neutral[200]}` },
          borderRadius: '28px',
          backgroundColor: colors.neutral[0],
          boxShadow: { xs: 'none', sm: '0 24px 70px rgba(22, 26, 34, 0.10)' },
        }}
      >
        <AuthHero />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 3, sm: 7, lg: 8 },
            py: { xs: 5, sm: 7 },
          }}
        >
          {location.pathname === '/auth/login' ? <Login /> : <Register />}
        </Box>
      </Box>
    </Box>
  )
}