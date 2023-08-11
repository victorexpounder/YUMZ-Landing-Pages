import React from 'react'
import TextField from '@mui/material/TextField';
import './Login.scss'
export const Login = () => {
  return (
    <div className='loginCon'>
        <div className="content">
            <div className="headText">
                <h1>Welcome back</h1>
                <div className="other">
                <TextField id="outlined-basic" label="Email Address" variant="outlined" fullWidth/>
                <TextField id="outlined-basic" label="Password" variant="outlined" fullWidth/>
                <div className="button">
                    Continue
                </div>
                <p>Don't have an account <a href="">Sign Up</a></p>

                </div>
            </div>
        </div>
    </div>
  )
}
