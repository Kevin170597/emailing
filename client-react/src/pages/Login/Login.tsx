import { useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Login = () => {
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    return (
        <div className='Login'>
            <form>
                <h1>Login</h1>
                <input onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="name" />
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password" placeholder="password" />
                <button type="submit">Send</button>
            </form>
            <p>Don't you have an account?</p>
            <NavLink to='/register'>Register</NavLink>
        </div>
    )
};