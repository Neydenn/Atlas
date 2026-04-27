import type {TaskFormData} from "./task-form-data.type.ts";

type inputType = "textField" | "timeTextField";

interface FieldsInterface {
    id: number;
    label: string;
    title: string;
    name: keyof TaskFormData;
    typeTextField: inputType;
}

export const createTaskFields: FieldsInterface[] = [
    { id: 1, label: "Введите Название", title: "Название задачи", name: "taskName", typeTextField: "textField" },
    { id: 2, label: "Введите План", title: "План время", name: "planTime", typeTextField: "timeTextField" },
    { id: 3, label: "Введите Факт", title: "Факт время", name: "factTime", typeTextField: "timeTextField" },
    { id: 4, label: "Добавьте описание", title: "Описание", name: "description", typeTextField: "textField"},
]