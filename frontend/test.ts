export const statusMap = {
    "success": "Выполнено",
    "process": "В процессе",
    "not completed": "Не выполнено",
};
for (const [key, value] of Object.entries(statusMap)) {
    console.log(key, value);
}