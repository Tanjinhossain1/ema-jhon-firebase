import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
      <div className='login-container'>
            <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="Email">Email</label>
                        <input type="email" name="email" id="" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="" />
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
    );
};

export default Login;