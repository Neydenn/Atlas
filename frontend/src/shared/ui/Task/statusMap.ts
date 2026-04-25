import type {status} from "./status-type.ts";

export const statusMap: Record<status, string> = {
    "success": "Выполнено",
    "process": "В процессе",
    "not completed": "Не выполнено",
};