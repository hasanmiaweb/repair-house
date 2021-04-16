import React from 'react';
import { Button } from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import './Login.css';
const Login = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 text-center m-auto">
                    <div className="loginBox">
                        <h2>LOGIN</h2> <br/>
                        <Button><FcGoogle/> Login With Google</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;