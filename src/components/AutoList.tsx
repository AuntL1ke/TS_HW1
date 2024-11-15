import { useEffect, useState } from "react";
import { ICar } from "../types/car";
import Auto from "./Auto";
import { Container, Stack, Typography } from "@mui/material";

export default function AutoList()
{
    const [cars, setCars] = useState<ICar[]|undefined>();
    const api : string = "https://testautoshopwebapi-fgf2cdcphmgtgtaz.polandcentral-01.azurewebsites.net/api/cars";
    
    useEffect(() => {
        fetch(api)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                setCars(data["$values"]);
            })
            .catch(error => console.error(error));
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