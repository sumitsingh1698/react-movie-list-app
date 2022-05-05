import './Login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";


export default function Form() {
    let navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [phoneNo, setPhoneNo] = useState('');
    const [optionValue, setOptionValue] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handlePhoneNoChange = (e) => {
        setPhoneNo(e.target.value);
    }

    const handleOptionValueChange = (e) => {
        setOptionValue(e.target.value);
    }

    const handleSubmit = (e) => {
        console.log(name);
        console.log(email);
        console.log(phoneNo);
        console.log(Password);
        console.log(optionValue);

        localStorage.setItem('Name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('phoneNo', phoneNo);
        localStorage.setItem('password', Password);
        localStorage.setItem('optionValue', optionValue);
        navigate(`/login`);
    }
    return (
        <>
            <div className='main'>
        <h2>Create Account</h2>

                <form className='form1' type='Post' onSubmit={(e) => { handleSubmit(e) }}>

                    <input className="un" type="text" name="name" placeholder='Name' onChange={(e) => { handleNameChange(e) }} />


                    <input className='un' type="email" name="email" placeholder='Email' onChange={(e) => { handleEmailChange(e) }} />


                    <input className='pass' type="password" name="password" placeholder='Password' onChange={(e) => { handlePasswordChange(e) }} />

                    <input className="un" type="text" name="phoneNo" placeholder='Phone No' onChange={(e) => { handlePhoneNoChange(e) }} />
                    <select className='un' onChange={(e) => { handleOptionValueChange(e) }} >
                        <option value="student">Student</option>
                        <option value="teacher">Teacher</option>
                        <option selected value="engineer">Engineer</option>
                        <option value="other">Other</option>
                    </select><br />
                    <input className='submit' type="submit" value="Submit" />
                </form>
            </div>

        </>
    )
}
