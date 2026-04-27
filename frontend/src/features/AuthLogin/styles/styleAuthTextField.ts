export const styleAuthTextField = {
    mb: 3,
    '& .MuiOutlinedInput-root':
        {
            color: '#F5F2E8',
            borderRadius: '24px',
            '& fieldset': { borderColor: '#3A463F' },
            '&:hover fieldset': { borderColor: '#526157' },
            '&.Mui-focused fieldset': { borderColor: '#2E8F7D' }
        },
    '& .MuiInputLabel-root': { color: '#A7B0A6' },
    '& .MuiInputLabel-root.Mui-focused': { color: '#52B6A4' }
}

export const buttonStyle = {
    maxWidth: '100%',
    borderRadius: '24px',
    backgroundColor: '#2E8F7D',
    color: '#F5F2E8',
    mt: 3,
    '&:hover': { backgroundColor: '#247568' },
}