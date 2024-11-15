import { Container, Typography } from "@mui/material";
import { ICar } from "../types/car";

export default function Auto(car : ICar)
{
    return (
        <div>
            <img src={car.imagePath} alt={car.model}/>
            <Typography variant="h4" width="256px">{car.model}</Typography>
            <Typography variant="h6">{car.categoryName}</Typography>
            <Typography variant="h6">{car.color}</Typography>
            <Typography variant="h6">{car.year}</Typography>
            <Typography variant="h6">${car.price}</Typography>
        </div>
    )
}