import type {AuthLoginFormType} from "../models/auth-login-form.type.ts";
import {baseApi} from "../../../shared/api/baseApi.ts";

export const login = async (data: AuthLoginFormType) => {
    try {
        const res = await baseApi.post("/auth/login", data);
        return res.data;
    } catch (e: unknown) {
        throw new Error(e.message);
    }
}