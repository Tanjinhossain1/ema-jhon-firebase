import React, { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const [ signInWithEmailAndPassword,user ] = useSignInWithEmailAndPassword(auth);
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(user){
        navigate(from)
    }
    const handleToSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password)
    }

    return (
        <div className='login-container'>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={handleToSubmit}>
                        <div className="form-group">
                            <label htmlFor="Email">Email</label>
                            <input onBlur={handleEmail} type="email" name="email" id="" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={handlePassword} type="password" name="password" id="" required/>
                        </div>
                        <input className='submit-input' type="submit" value="Submit" />
                    </form>
                    <p>
                        new to ema-john?<Link to='/signup'>Create New Account</Link>
                    </p>
                    <div className='or-container'>
                        <p className='or-left'></p>
                        <p>or</p>
                        <p className='or-right'></p>
                    </div>
                    <div>
                        <button onClick={()=>signInWithGoogle()} className='google-button'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_7bMO9d6c7f-DPHuqUinDwpqNF00jKnrQ&usqp=CAU" alt="" /> Continue with Google</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;