import { } from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from '../../src/utilities/Forms'
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import GoogleplayImg from "../assets/googleplay.png";
import AppstoreImg from "../assets/appstore.png"
const LoginModal = () => {

    const regis = useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [remember, setRemember] = useState(false);
    const [validate, setValidate] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    const validateLogin = () => {
        let isValid = true;

        let validator = Form.validator({
            email: {
                value: email,
                isRequired: true,
                isEmail: true
            },
            password: {
                value: password,
                isRequired: true,
                minLength: 6
            }
        });

        if (validator !== null) {
            setValidate({
                validate: validator.errors
            })

            isValid = false
        }
        return isValid;
    }

    const authenticate = (e) => {
        e.preventDefault();

        const validate = validateLogin();

        if (validate) {
            setValidate({});
            setEmail('');
            setPassword('');
            alert('Successfully Login');
        }
    }

    const togglePassword = () => {
        if (showPassword) {
            setShowPassword(false);
        } else {
            setShowPassword(true)
        }
    }


    return (
        <>

            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6 login-module-lg ">
                            <img src="https://www.foundit.in/rio/public/images/login-illustration.png" className="img-fluid" alt="Phone image" />
                            <p>Create your profile now and be visible to the top <br /> recruiters in the world</p>
                        </div>
                        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1 pb-5">
                            <div className='login-to-register'>
                                <p>New to HayJob?<button type='' onClick={() => { regis("/register") }}>Register</button></p><hr style={{ width: "97%" }} />
                                <h4>Login</h4>
                            </div>
                            <div className='d-flex Icons-login'>
                                <p><BsGoogle className='google-icon' /> Google</p>
                                <p><BsLinkedin className='linkedin-icon' /> LinkedIn</p>
                                <p><FaFacebookSquare className='facebook-icon' /> Facebook</p>
                            </div>
                            <div className='d-flex or-system'>
                                <p ><hr /></p>
                                <span>OR</span>
                                <p ><hr /></p>
                            </div>
                            <div className="row ">
                                <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
                                    <div className="d-flex flex-column align-content-start">
                                        <div className="auth-body   main-content-login-page">
                                            <p>Enter Your Email ID</p>
                                            <div className="auth-form-container text-start">
                                                <form className='login-page' method="POST" onSubmit={authenticate} autoComplete={'off'}>
                                                    <div className='email-text'>
                                                        <input type="email"
                                                            className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
                                                            id="email"
                                                            name="email"
                                                            value={email}
                                                            placeholder="Enter Email-Id"
                                                            onChange={(e) => setEmail(e.target.value)}
                                                        />
                                                        <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                                            {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                                                        </div>
                                                    </div>
                                                    <p>Password</p>
                                                    <div className='password-text ' style={{ position: "relative" }}>
                                                        <div className="input-group ">
                                                            <input type={showPassword ? 'text' : 'password'}
                                                                className={`form-control ${validate.validate && validate.validate.password ? 'is-invalid ' : ''}`}
                                                                name="password"
                                                                id="password"
                                                                value={password}
                                                                placeholder="Enter Your Password"
                                                                onChange={(e) => setPassword(e.target.value)}
                                                            />

                                                            <span type="button" className='show-hide' onClick={(e) => togglePassword(e)} ><i className={showPassword ? 'far fa-eye' : 'far fa-eye-slash'} ></i> </span>

                                                            <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.password) ? 'd-block' : 'd-none'}`} >
                                                                {(validate.validate && validate.validate.password) ? validate.validate.password[0] : ''}
                                                            </div>
                                                        </div>


                                                        <div className="extra mt-3 row justify-content-between">
                                                            <div className="col-6">
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" id="remember" checked={remember} onChange={(e) => setRemember(e.currentTarget.checked)} />
                                                                    <label className="form-check-label" htmlFor="remember">
                                                                        Remember me
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="forgot-password text-end">
                                                                    <Link to="/forgot-password">Forgot password?</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="text-center">
                                                        <button type="submit" style={{ height: "47px" }} className="btn btn-primary  w-100 theme-btn mx-auto">Log In</button>
                                                    </div>
                                                    <div className="login-via-otp pb-3">
                                                        <button>Login Via OTP</button>
                                                    </div>
                                                </form>
                                                <div className='card shadow download-page '>
                                                    <span>Your dream job is a click away! Get <br /> the app on your mobile.</span>
                                                    <div className='d-flex  '>
                                                        <img src={GoogleplayImg} alt="" className='google-img ' />
                                                        <img src={AppstoreImg} alt="" className='app-img' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default LoginModal