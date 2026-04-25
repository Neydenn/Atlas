import type {status} from "../Task/status-type.ts";

export type TaskFormData = {
    taskName: string;
    planTime: string;
    factTime: string;
    description: string;
}