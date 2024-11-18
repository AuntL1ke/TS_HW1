import { useForm } from "react-hook-form";
import { ILoginDto } from "../../types/user";
import { Box, Button, TextField, Typography } from "@mui/material";

export default function Login()
{
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginDto>();

    const onSubmit = async (user: ILoginDto) => {
        alert(user.email);
    }

    return (
        <div className="Login">
            <Typography variant="h4">Login</Typography>
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        required
                        {...register('email')}
                        id = "email"
                        label = "email"
                        type = "email"
                        variant = "filled"/>
                    <TextField
                        required
                        {...register('password')}
                        id = "password"
                        label = "password"
                        type = "password"
                        variant = "filled"/>
                    
                    <Button variant = "contained" type = "submit">Login</Button>
                </form>
            </Box>
        </div>
    )
}