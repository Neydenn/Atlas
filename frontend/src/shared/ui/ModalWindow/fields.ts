import type {TaskFormData} from "./task-form-data-type.ts";

interface FieldsInterface {
    id: number;
    label: string;
    title: string;
    name: keyof TaskFormData;
}

export const fields: FieldsInterface[] = [
    { id: 1, label: "Введите Название", title: "Название задачи", name: "taskName"},
    { id: 2, label: "Введите План", title: "План время", name: "planTime" },
    { id: 3, label: "Введите Факт", title: "Факт время", name: "factTime" },
    { id: 4, label: "Добавьте описание", title: "Описание", name: "description"},
]