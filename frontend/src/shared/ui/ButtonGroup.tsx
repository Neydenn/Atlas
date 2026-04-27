import {ToggleButton, ToggleButtonGroup} from "@mui/material";

export const ButtonGroup = () => {
    return (
        <ToggleButtonGroup exclusive aria-label="Platform">
            <ToggleButton
                value="not completed"
                sx={{
                    color: '#D95D5D',
                    borderColor: '#D95D5D',
                    '&.Mui-selected': {
                        color: '#F07878',
                        borderColor: '#F07878',
                        backgroundColor: 'rgba(217, 93, 93, 0.14)',
                    },
                }}
            >
                Не выполнено
            </ToggleButton>

            <ToggleButton
                value="process"
                sx={{
                    color: '#D99A2B',
                    borderColor: '#D99A2B',
                    '&.Mui-selected': {
                        color: '#F0B84B',
                        borderColor: '#F0B84B',
                        backgroundColor: 'rgba(217, 154, 43, 0.14)',
                    },
                }}
                >
                В процессе
            </ToggleButton>
            <ToggleButton
                value="success"
                sx={{
                    color: '#3FA66B',
                    borderColor: '#3FA66B',
                    '&.Mui-selected': {
                        color: '#5FCB88',
                        borderColor: '#5FCB88',
                        backgroundColor: 'rgba(63, 166, 107, 0.14)',
                    },
                }}
                >
                Выполнено
            </ToggleButton>
        </ToggleButtonGroup>
    )
}
