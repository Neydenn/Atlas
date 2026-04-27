import {Box, Typography} from "@mui/material";

export const Header = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                px: 4,
                height: 84,
                backgroundColor: '#222725',
                borderBottom: '1px solid #3A463F',
            }}
        >
            <Typography variant="h4" sx={{ color: '#F5F2E8', fontWeight: 700 }}>
                DayLog
            </Typography>
        </Box>
    )
}
