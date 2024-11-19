import { useEffect, useState } from "react";
import { ICar } from "../types/car";
import Auto from "./Auto";
import { Container, Stack, Typography } from "@mui/material";
import { CarService } from "../services/cars.service";

export default function AutoList()
{
    const [cars, setCars] = useState<ICar[]|undefined>();
    
    useEffect(() => {
        const dataFetch = async () => {
            const data = await CarService.cars();

            setCars(data);
        }

        dataFetch().catch(err => {
            console.error(err);
        })
    }, []);

    return (
        <Container>
            <Typography variant="h4">Car Center</Typography>
            <Stack
                spacing={{xs: 1, sm: 2}}
                direction="row"
                useFlexGap
                sx={{ flexWrap: "wrap" }}>
                {
                    cars? (
                        cars?.map((car) =>
                            <Auto {...car}/>
                    )) : (
                        <Typography variant="h6">Downloading...</Typography>
                    )
                }
            </Stack>
        </Container>
    );
}