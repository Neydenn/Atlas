import { Box } from "@mui/material";
import hero from '../../../assets/hero.png';
import {colors} from "../../../shared/atlas-ui/theme/colors.ts";

export const AuthHero = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        p: { md: 6, lg: 7 },
        color: colors.neutral[0],
        backgroundColor: colors.brand[950],
        backgroundImage: 'radial-gradient(circle at 80% 20%, rgba(142, 169, 181, 0.2), transparent 32%), radial-gradient(circle at 10% 90%, rgba(82, 111, 124, 0.18), transparent 35%)',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1, maxWidth: 470 }}>
        <Box
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            minHeight: 30,
            px: 1.5,
            border: '1px solid rgba(255, 255, 255, 0.16)',
            borderRadius: '999px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            color: colors.brand[200],
            fontSize: '0.75rem',
            fontWeight: 750,
            letterSpacing: '0.12em',
          }}
        >
          РАБОЧЕЕ ПРОСТРАНСТВО
        </Box>
        <Box
          component="h2"
          sx={{
            mt: 3,
            mb: 2,
            fontSize: { md: '2.5rem', lg: '3rem' },
            lineHeight: 1.08,
            letterSpacing: '-0.045em',
            fontWeight: 750,
          }}
        >
          Всё важное для команды — в одном месте.
        </Box>
        <Box sx={{ maxWidth: 410, color: colors.neutral[300], fontSize: '1.05rem', lineHeight: 1.7 }}>
          Планируйте работу, храните знания и следите за прогрессом без лишнего шума.
        </Box>
      </Box>

      <Box
        component="img"
        src={hero}
        alt=""
        sx={{
          position: 'absolute',
          right: -18,
          bottom: 30,
          width: { md: 330, lg: 390 },
          opacity: 0.5,
          filter: 'grayscale(1) contrast(0.85) brightness(1.2) drop-shadow(0 24px 40px rgba(0, 0, 0, 0.24))',
        }}
      />

      <Box sx={{ position: 'relative', zIndex: 1, color: colors.neutral[400], fontSize: '0.8125rem' }}>
        Защищённый доступ к пространству вашей команды
      </Box>
    </Box>
  );
}