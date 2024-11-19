import { instance } from "../api/axios.api";
import { removeTokenFromLocalStorage } from "../helpers/localStorage.helper";
import { ILoginDto, IRegisterDto } from "../types/user";

export const AuthService = {
    async login(userData : ILoginDto) : Promise<string | undefined> {
        const result = await instance.post<string>('accounts/login', userData);

        return result.data;
    },

    async register(userData : IRegisterDto) : Promise<void> {
        await instance.post<string>('accounts/registration', userData);
    },

    async logout() {
        removeTokenFromLocalStorage();
    }
}