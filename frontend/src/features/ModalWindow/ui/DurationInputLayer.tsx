import {Box, Grid, Typography} from "@mui/material";
import {TimeCountTextField} from "../../../shared/ui/TimeCountTextField.tsx";
import type {TimeFormData} from "../model/time-form-data.ts";

interface DurationInputLayerProps {
    label: string;
    onChange: (value: TimeFormData) => void;
    value: TimeFormData;
}

export const DurationInputLayer = ({ label, onChange, value }: DurationInputLayerProps) => {
    const handelTimeChange = (name: keyof TimeFormData, newValue: string) => {
        onChange({
            ...value,
            [name]: newValue,
        })
    }

    return (
        <Box>
            <Typography sx={{ textAlign: 'center', mb: 1, fontWeight: 'bold' }}>{label}</Typography>
            <Grid container spacing={2} sx={{ border: '1px solid #334155', p: 2, borderRadius: '24px'}}>
                <Grid size={4}>
                    <TimeCountTextField
                        label="Дни"
                        name='days'
                        value={value.days}
                        onChange={handelTimeChange}
                    />
                </Grid>
                <Grid size={4}>
                    <TimeCountTextField
                        label="Часы"
                        name="hours"
                        value={value.hours}
                        onChange={handelTimeChange}
                    />
                </Grid>
                <Grid size={4}>
                    <TimeCountTextField
                        label="Минуты"
                        name='minutes'
                        value={value.minutes}
                        onChange={handelTimeChange}
                    />
                </Grid>
            </Grid>
        </Box>
    )
}