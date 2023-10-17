import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from '../../src/utilities/Forms'
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import GoogleplayImg from "../assets/googleplay.png";
import AppstoreImg from "../assets/appstore.png"

const Login = () => {
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
    const [mobileNumber, setMobileNumber] = useState('');
    console.log(mobileNumber)


    const [inputValue, setInputValue] = useState('');


    const handleChange = (event) => {
        const { value } = event.target;

        setInputValue(event.target.value);
        const sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
        setMobileNumber(sanitizedValue);

    };

    let inputField;

    if (inputValue.length >= 7 || inputValue.length === 10) {
        inputField = (
            <>
                <span className="number-box">+91 </span>
                <input
                    type="number"
                    value={mobileNumber}
                    onChange={handleChange}
                    placeholder="Enter 7-digit number"
                    maxLength={"10"}
                />
            </>
        );
    } else {
        inputField = (
            <input
                type="email"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter Email / Mobile Number"
            />
        );
    }


    const [menuState, setMenuState] = useState({
        style: 'menu',
        menuStatus: 'open',
    });

    const handleClick = () => {
        setMenuState((prevState) => ({
            menuStatus: prevState.menuStatus === 'open' ? 'close' : 'open',
            style: prevState.menuStatus === 'open' ? 'menu active' : 'menu',
        }));
    };

    return (
        // <Link className="text-link" to="/register" > Register</Link></div>
        <>
            <div className='ctnd'>
                <span onClick={handleClick} className="login-nav-tag" id="login-to-res">Login</span>
                <div className={menuState.style}>
                    <span onClick={handleClick}><RxCross1 className=" rx-cut-btn" /></span>
                    <ul className='custom-nav-to'>
                        <div className='login-to-register'>
                            <p>New to HayJob?<button type='' onClick={() => { regis("/register") }}>Register</button></p><hr style={{ width: "90%", color: "gray" }} />
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
                                        <p className="email-or-phone">Enter Your Email / Phone Number</p>
                                        <div className="auth-form-container text-start">
                                            <form className='login-page' method="POST" onSubmit={authenticate} autoComplete={'off'}>
                                                <div className='email-text'>

                                                    {inputField}


                                                    <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
                                                        {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
                                                    </div>
                                                </div>
                                                <p className="passwor-destination">Password</p>
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
                                                    <button type="submit" style={{ height: "47px" }} className="btn btn-primary   theme-btn">Log In</button>
                                                </div>
                                                <div className="login-via-otp ">
                                                    <button>Login Via OTP</button>
                                                </div>
                                            </form>
                                            <div className='card py-3 download-page '>
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
                    </ul>
                </div>
            </div>


        </>
    );
}

export default Login;






