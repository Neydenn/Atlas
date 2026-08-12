import {Box, Typography} from "@mui/material"
import {colors} from "../../atlas-ui/theme/colors.ts";

export const AtlasIconSection = () => {
  return (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 1.25,
        mb: { xs: 5, md: 7}
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          width: 36,
          height: 36,
          display: 'grid',
          placeItems: 'center',
          borderRadius: '10px',
          backgroundColor: colors.info['600'],
          color: colors.neutral[0],
          fontWeight: 800,
          fontSize: '1.125rem',
          boxShadow: '0 8px 18px rgba(66, 90, 101, 0.2)',
        }}
      >
        A
      </Box>
      <Typography sx={{ fontSize: '1.125rem', fontWeight: 750, letterSpacing: '-0.02em' }}>
        Atlas
      </Typography>
    </Box>
  )
}