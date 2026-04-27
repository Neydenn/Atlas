import type {TimeFormData} from "./time-form-data.ts";

export type TaskFormData = {
    taskName: string;
    planTime: TimeFormData;
    factTime: TimeFormData;
    description: string;
}