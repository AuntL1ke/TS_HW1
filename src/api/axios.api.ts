import axios from "axios"
import { getTokenFromLocalStorage } from "../helpers/localStorage.helper";

const urlApi : string = "https://testautoshopwebapi-fgf2cdcphmgtgtaz.polandcentral-01.azurewebsites.net/api/";

export const instance = axios.create({
    baseURL: urlApi,
    headers: {
        Authorization: 'Bearer'+getTokenFromLocalStorage() || ''
    }
});