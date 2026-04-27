import {Box, Typography} from "@mui/material";

export const Task = () => {
    return (
        <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 3}}>
            <Typography sx={{ color: 'white', }}>Учить TypeScript</Typography>
            <Typography sx={{ color: 'white'}}>План Время</Typography>
            <Typography sx={{ color: 'white'}}>Факт время</Typography>
            <Typography sx={{ color: 'white'}}>Статус</Typography>
            <Typography sx={{ color: 'white'}}>описание</Typography>
        </Box>
    )
}