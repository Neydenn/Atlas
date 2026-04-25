import { Button, Grid, Modal, Typography} from "@mui/material";
import {useState} from "react";
import {fields} from "./fields.ts";
import {CustomTextField} from "./CustomTextField.tsx";
import type {TaskFormData} from "./task-form-data-type.ts";

interface ModalWindowProps {
    isOpen: boolean;
    setOpenWindow: () => void;
}

const styleModal = {
    position: 'absolute' as const,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    maxWidth: "70%",
    bgcolor: '#1E293B',
    border: '1px solid #334155',
    borderRadius: '20px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45)',
    p: 4,
    display: 'flex',
    gap: 2,
    color: '#FFFFFF',
    outline: 'none',
};



const ModalWindow = ({ isOpen, setOpenWindow }: ModalWindowProps) => {
    const [formData, setFormData] = useState<TaskFormData>({
        taskName: '',
        planTime: '',
        factTime: '',
        description: '',
    });

    const handleChange = <K extends keyof TaskFormData>(
        field: K,
        value: TaskFormData[K]
    ) => {
        setFormData((prev) => ({
            ...prev,
            [field]: value
        }))
    };


    return (
        <Modal
            open={isOpen}
            onClose={setOpenWindow}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Grid container spacing={2} sx={styleModal}>
                <Grid size={12}>
                    <Typography sx={{ textAlign: 'center', fontWeight: 'bold' }} variant="h5">
                        Создайте задачу
                    </Typography>
                </Grid>
                {fields.map((field) => (
                    <Grid size={6} key={field.id}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {field.title}
                        </Typography>
                        <CustomTextField
                            label={field.label}
                            value={String(formData[field.name])}
                            onChange={(value) => handleChange(field.name, value)}
                        />
                    </Grid>
                ))}
                <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', mt: 4}}>
                    <Button variant="contained" fullWidth sx={{ maxWidth: '50%', borderRadius: '24px'}}>
                        Создать
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    )
}
export default ModalWindow