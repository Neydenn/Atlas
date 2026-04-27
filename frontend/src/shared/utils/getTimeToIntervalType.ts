import type {TimeFormData} from "../../features/ModalWindow/model/time-form-data.ts";

export const getTimeToIntervalType = (data: TimeFormData): string => {
    const days = Number(data.days) || 0;
    const hours = Number(data.hours) || 0;
    const minutes = Number(data.minutes) || 0;

    return `${days} days ${hours} hours ${minutes} minutes`;
}