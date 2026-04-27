import {ToggleButton, ToggleButtonGroup} from "@mui/material";

export const ButtonGroup = () => {
    return (
        <ToggleButtonGroup exclusive aria-label="Platform">
            <ToggleButton
                value="not completed"
                sx={{
                    color: '#ff6b6b',
                    borderColor: '#ff6b6b',
                    '&.Mui-selected': {
                        color: '#ff4d4d',
                        borderColor: '#ff4d4d',
                        backgroundColor: 'rgba(255, 77, 77, 0.1)',
                    },
                }}
            >
                Не выполнено
            </ToggleButton>

            <ToggleButton
                value="process"
                sx={{
                    color: '#d4b106',
                    borderColor: '#d4b106',
                    '&.Mui-selected': {
                        color: '#f1c40f',
                        borderColor: '#f1c40f',
                        backgroundColor: 'rgba(241, 196, 15, 0.1)',
                    },
                }}
                >
                В процессе
            </ToggleButton>
            <ToggleButton
                value="success"
                sx={{
                    color: '#2ecc71',
                    borderColor: '#2ecc71',
                    '&.Mui-selected': {
                        color: '#27ae60',
                        borderColor: '#27ae60',
                        backgroundColor: 'rgba(39, 174, 96, 0.1)',
                    },
                }}
                >
                Выполнено
            </ToggleButton>
        </ToggleButtonGroup>
    )
}