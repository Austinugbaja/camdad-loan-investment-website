import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
    return (
        <div id="login-section">
            <div className="container text-center login-container">
                <div className="login-borderline">
                    <h1 className="login-heading">welcome back!</h1>
                    <p className="login-desc">Kindly fill in your login details to proceed</p>
                    <form action="/" className="login-form">
                        <div className="login">
                            <input type="email" className="form-control" placeholder="Email address" />
                        </div>

                        <div className="login">
                            <input type="password" className="form-control" placeholder="Password" />
                            <p className="text-end"><Link to="/">Forgot password?</Link></p>
                        </div>

                        <div>
                            <button className="login-btn">login</button>
                        </div>
                    </form>
                    <div className="login-member">
                       <p>Don't have an account yet? <Link to="/SignUp">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
