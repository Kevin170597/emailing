import { Navigate, Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";

export const PrivateLayout = () => {
    const authToken = 'a';

    if (!authToken) return <Navigate to='/login' />

    return (
        <div style={{ display: 'flex' }}>
            <Navbar />
            <Outlet />
        </div>
    )
};