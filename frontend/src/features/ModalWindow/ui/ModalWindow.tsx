import {Button, Grid, Modal, Typography} from "@mui/material";
import {useState} from "react";
import type {TaskFormData} from "../model/task-form-data.type.ts";
import {CustomTextField} from "../../../shared/ui/CustomTextField.tsx";
import {createTaskFields} from "../model/create-task-fields.ts";
import {DurationInputLayer} from "./DurationInputLayer.tsx";
import type {TimeFormData} from "../model/time-form-data.ts";
import {styleModal} from "../styles/styleModal.ts";
import {createTask} from "../api/createTask.ts";
import {getTimeToIntervalType} from "../../../shared/utils/getTimeToIntervalType.ts";

interface ModalWindowProps {
    isOpen: boolean;
    setOpenWindow: () => void;
}

const ModalWindow = ({ isOpen, setOpenWindow }: ModalWindowProps) => {
    const emptyTime = (): TimeFormData => ({
        days: '',
        hours: '',
        minutes: '',
    })

    const [formData, setFormData] = useState<TaskFormData>({
        taskName: '',
        planTime: emptyTime(),
        factTime: emptyTime(),
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

    const handleClick = () => {
        const fullPlanTimeTask = getTimeToIntervalType(formData.planTime)
        const fullFactTimeTask = getTimeToIntervalType(formData.factTime);

        const data = {
            ...formData,
            plantime: fullPlanTimeTask,
            factTime: fullFactTimeTask,
        }

        console.log(createTask(data));
    }

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
                {createTaskFields.map((field) => (
                    <Grid size={6}>
                        {field.typeTextField === "textField" && (
                            <CustomTextField onChange={(value) => handleChange(field.name, value)} label={field.label} value={formData[field.name]} />
                        )}
                        {field.typeTextField === "timeTextField" && (
                            <DurationInputLayer
                                label={field.label}
                                value={formData[field.name]}
                                onChange={(value) => handleChange(field.name, value)}
                            />
                        )}
                    </Grid>
                ))}
                <Grid size={12} sx={{ display: 'flex', justifyContent: 'center', mt: 4}}>
                    <Button onClick={handleClick} variant="contained" fullWidth sx={{ maxWidth: '50%', borderRadius: '24px', backgroundColor: '#2E8F7D', color: '#F5F2E8', '&:hover': { backgroundColor: '#247568' },}}>
                        Создать
                    </Button>
                </Grid>
            </Grid>
        </Modal>
    )
}
export default ModalWindow
