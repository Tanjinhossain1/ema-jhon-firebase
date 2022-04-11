import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleConfirmPassword = (e) =>{
        setConfirmPassword(e.target.value);
    }
    return (
        <div>
            <div className='login-container'>
                <div className='form-container'>
                    <div>
                        <h2 className='form-title'>Login</h2>
                        <form>
                            <div className="form-group">
                                <label htmlFor="Email">Email</label>
                                <input onBlur={handleEmail} type="email" name="email" id="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input onBlur={handlePassword} type="password" name="password" id="" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="confirm-password">Confirm-Password</label>
                                <input onBlur={handleConfirmPassword} type="password" name="password" id="" />
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
                            <button className='google-button'> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2R_7bMO9d6c7f-DPHuqUinDwpqNF00jKnrQ&usqp=CAU" alt="" /> Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;