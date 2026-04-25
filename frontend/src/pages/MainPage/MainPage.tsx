import { Box, Button, Typography } from "@mui/material";
import {Header} from "../../shared/ui/Header/Header.tsx";
import {Task} from "../../shared/ui/Task/Task.tsx";
import {useState} from "react";
import ModalWindow from "../../shared/ui/ModalWindow/ModalWindow.tsx";

export const MainPage = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#0F172A',}}>
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
                    <Button variant="contained" sx={{backgroundColor: '#3B82F6', color: '#FFFFFF',}}>
                        Настройки
                    </Button>

                    <Button variant="contained" onClick={() => setOpenModal(true)} sx={{backgroundColor: '#3B82F6', color: '#FFFFFF',}}>
                        Создать задачу
                    </Button>
                    <ModalWindow isOpen={openModal} setOpenWindow={() => setOpenModal(false)} />
                </Box>
                <Box sx={{
                    display: 'flex',
                    width: '100%',
                    maxWidth: '70%',
                    border: '2px solid #334155',
                    borderRadius: '16px',
                    mt: 4,
                    flexDirection: 'column',
                }}>
                    <Typography sx={{ color: 'white', textAlign: 'center'}}>ПН</Typography>
                    <Box sx={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', p: 2, borderBottom: '1px solid #334155', borderTop: '1px solid #334155'}}>
                        <Typography sx={{ color: 'white'}}>Задача</Typography>
                        <Typography sx={{ color: 'white'}}>План Время</Typography>
                        <Typography sx={{ color: 'white'}}>Факт время</Typography>
                        <Typography sx={{ color: 'white'}}>Статус</Typography>
                        <Typography sx={{ color: 'white'}}>описание</Typography>
                    </Box>
                    <Task />
                </Box>
            </Box>
        </Box>
    );
};