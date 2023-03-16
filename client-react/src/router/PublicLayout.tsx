import { Navigate, Outlet } from "react-router-dom";

export const PublicLayout = () => {
    const authToken = 'a';

    if (authToken) return <Navigate to='/' />

    return <div><Outlet /></div>
};