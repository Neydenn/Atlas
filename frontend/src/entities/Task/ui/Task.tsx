import {Box, Typography} from "@mui/material";

export const Task = () => {
    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 3}}>
            <Typography sx={{ color: '#F5F2E8', }}>Учить TypeScript</Typography>
            <Typography sx={{ color: '#F5F2E8'}}>План Время</Typography>
            <Typography sx={{ color: '#F5F2E8'}}>Факт время</Typography>
            <Typography sx={{ color: '#F5F2E8'}}>Статус</Typography>
            <Typography sx={{ color: '#F5F2E8'}}>описание</Typography>
        </Box>
    )
}
