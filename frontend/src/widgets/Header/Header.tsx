import {Box, Typography} from "@mui/material";

export const Header = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                px: 4,
                height: 84,
                backgroundColor: '#1E293B',
                borderBottom: '1px solid #334155',
            }}
        >
            <Typography variant="h4" sx={{ color: '#fff', fontWeight: 700 }}>
                DayLog
            </Typography>
        </Box>
    )
}