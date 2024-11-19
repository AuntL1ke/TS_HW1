import { instance } from "../api/axios.api";
import { ICar } from "../types/car";

export const CarService = {
    async cars() : Promise<ICar[]|undefined> {
        const result = await instance.get<{ $values : ICar[] }>('cars');
        
        return result.data.$values;
    }
}