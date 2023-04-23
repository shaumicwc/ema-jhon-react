import React from 'react';

const SignUpX = () => {
    return (
        <div>
           <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="password"> Confirm Password</label>
                    <input type="password" name="Confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
        </div>  
        </div>
    );
};

export default SignUpX;