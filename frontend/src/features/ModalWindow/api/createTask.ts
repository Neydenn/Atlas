import {baseApi} from "../../../shared/api/baseApi.ts";

interface createTaskProps {
    taskName: string;
    planTime: string;
    factTime: string;
    description: string;
}

export const createTask = async (data: createTaskProps): Promise<undefined> => {
    try {
        const res = await baseApi.post("/tasks/create", data);
        return res.data
    } catch (e) {
        throw new Error(e.message);
    }
}