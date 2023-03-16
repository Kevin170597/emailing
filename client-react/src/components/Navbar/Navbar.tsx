import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
    const route = useLocation();

    return (
        <div className='Navbar'>
            <h2>Emailing</h2>
            <Link className={route.pathname === '/' ? 'active' : ''} to={'/'}>Home</Link>
            <Link className={route.pathname === '/sent' ? 'active' : ''} to={'/sent'}>Enviados</Link>
        </div>
    )
};