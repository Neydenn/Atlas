import { Box, Button, Typography } from "@mui/material";
import {Header} from "../../widgets/Header/Header.tsx";
import {Task} from "../../entities/Task/ui/Task.tsx";
import {useState} from "react";
import ModalWindow from "../../features/ModalWindow/ui/ModalWindow.tsx";

export const MainPage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#16181A',}}>
            <Header />
            <Box component="main"
                sx={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    p: 4,
                }}>
                <Box sx={{ display: 'flex', gap: 2,}}>
                    <Button variant="contained" sx={{backgroundColor: '#2E8F7D', color: '#F5F2E8', '&:hover': { backgroundColor: '#247568' },}}>
                        Настройки
                    </Button>

                    <Button variant="contained" onClick={() => setOpenModal(true)} sx={{backgroundColor: '#2E8F7D', color: '#F5F2E8', '&:hover': { backgroundColor: '#247568' },}}>
                        Создать задачу
                    </Button>
                    <ModalWindow isOpen={openModal} setOpenWindow={() => setOpenModal(false)} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '70%',
                    border: '2px solid #3A463F',
                    borderRadius: '16px',
                    mt: 4,
                    flexDirection: 'column',
                }}>
                    <Typography sx={{ color: '#F5F2E8', textAlign: 'center'}}>ПН</Typography>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #3A463F', borderTop: '1px solid #3A463F'}}>
                        <Typography sx={{ color: '#F5F2E8'}}>Задача</Typography>
                        <Typography sx={{ color: '#F5F2E8'}}>План Время</Typography>
                        <Typography sx={{ color: '#F5F2E8'}}>Факт время</Typography>
                        <Typography sx={{ color: '#F5F2E8'}}>Статус</Typography>
                        <Typography sx={{ color: '#F5F2E8'}}>описание</Typography>
                    </Box>
                    <Task />
                </Box>
            </Box>
        </Box>
    );
};
