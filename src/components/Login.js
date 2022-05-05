import './Login.css';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        const correctEmail = localStorage.getItem('email');
        const correctPassword = localStorage.getItem('password');
        if (email !== correctEmail || password !== correctPassword) {
            alert('Invalid Cridentials');
            return;
        }
        navigate(`/home`);
    }
    return (
        <>
            <div className='main'>
                <form className='form1' type='Post' onSubmit={(e) => { handleSubmit(e) }}>
                        <input className='un' type="email" name="email" placeholder='Email' onChange={(e) => { handleEmailChange(e) }} />
                        <input className="pass" type="password" name="password" placeholder='Password' onChange={(e) => { handlePasswordChange(e) }} />
                    <input class="submit" type="submit" />
                    <p class="forgot" align="center"><a href="/">Create Account</a></p>
                </form>
            </div>     
        </>
    )
}
