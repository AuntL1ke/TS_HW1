import { useForm } from "react-hook-form";
import { ILoginDto } from "../../types/user";
import { Box, Button, TextField, Typography } from "@mui/material";
import { AuthService } from "../../services/auth.service";
import { setTokenToLocalStorage } from "../../helpers/localStorage.helper";
import { useNavigate } from "react-router-dom";

export default function Login()
{
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<ILoginDto>();

    const onSubmit = async (user: ILoginDto) => {
        try {
            const token = await AuthService.login(user);

            if (token) {
                setTokenToLocalStorage(token);
                navigate("/autos")
            }
        } catch (err : any) {
            const error = err.response?.data.message;
            
            alert(error);
        }
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