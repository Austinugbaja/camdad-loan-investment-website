import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/SignUp.css';

const SignUpPage = () => {
    return (
        <div id="signup-section">
            <div className="container text-center signup-container">
                <div className="signup-borderline">
                <h1 className="signup-heading">sign up</h1>
                <p className="signup-desc">There's no charge upon registration</p>
                <form action="" className="signup-form">
                    <div className="signup">
                    <input type="text" className="form-control" placeholder="Full Name" />
                    </div>

                    <div className="signup">
                    <input type="email" className="form-control" placeholder="Email address" />
                    </div>

                    <div className="signup">
                    <input type="number" className="form-control" placeholder="BVN" />
                    </div>

                    <div className="signup">
                    <input type="password" className="form-control" placeholder="Password" />
                    </div>

                    <div className="signup">
                    <input type="password" className="form-control" placeholder="Confirm Password" />
                    </div>

                    <div className="text-center">
                        <button className="signup-btn">signup</button>
                    </div>
                </form>
                <div className="signup-member">
                <p>Already a member? <Link to="/Login">Login</Link></p>
                </div>
                </div>
              
                
            </div>
        </div>
    )
}

export default SignUpPage;
