import { Link, Outlet } from "react-router-dom";
import { Container } from "@mui/material";

export default function Layout()
{
    return (
        <Container>
            <header>
                <Link to="/">Home</Link>
                <p className="divider"> | </p>
                <Link to="/autos">Autos</Link>
            </header>
            <main>
                <Outlet/>
            </main>
        </Container>
    )
}