import type {status} from "./status.type.ts";

export const taskStatusMap: Record<status, string> = {
    "success": "Выполнено",
    "process": "В процессе",
    "not completed": "Не выполнено",
};