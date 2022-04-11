import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Shipping = () => {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const handleName = (e)=>{
        setName(e.target.value)
    }
    const handleNumber = (e) =>{
        setNumber(e.target.value)
    }
    const handleToSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <div>
            <div>
                <div className='login-container'>
                    <div className='form-container'>
                        <div>
                            <h2 className='form-title'>Add Shipping</h2>
                            <form onSubmit={handleToSubmit}>
                                <div className="form-group">
                                    <label htmlFor="Email">Email</label>
                                    <input  type="email" name="email" id="" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input onBlur={handleName} type="password" name="password" id="" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="number">Number</label>
                                    <input onBlur={handleNumber} type="password" name="password" id="" required />
                                </div>
                                <input className='submit-input' type="submit" value="Submit" />
                            </form>
                                                 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;