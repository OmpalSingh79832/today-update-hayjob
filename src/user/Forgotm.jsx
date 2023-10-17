// import { useState } from "react";
// import { Link } from "react-router-dom";
// import Form from '../../src/utilities/Forms'

// const Forgot = () => {

//     const [email, setEmail] = useState('');
//     const [validate, setValidate] = useState({});

//     const validateforgotPassword = () => {
//         let isValid = true;

//         let validator = Form.validator({
//             email: {
//                 value: email,
//                 isRequired: true,
//                 isEmail: true
//             }
//         });

//         if (validator !== null) {
//             setValidate({
//                 validate: validator.errors
//             })

//             isValid = false
//         }
//         return isValid;
//     }

//     const forgotPassword = (e) => {
//         e.preventDefault();

//         const validate = validateforgotPassword();

//         if (validate) {
//             alert('Reset password link is sent to ' + email);
//             setValidate({});
//             setEmail('');
//         }
//     }

//     return (
//         <div className="row g-0 auth-wrapper">
//             <div className="col-12 col-md-5 col-lg-6 h-100 auth-background-col">
//                 <div className="auth-background-holder"></div>
//                 <div className="auth-background-mask"></div>
//             </div>

//             <div className="col-12 col-md-7 col-lg-6 auth-main-col text-center">
//                 <div className="d-flex flex-column align-content-end">
//                     <div className="auth-body mx-auto">
//                         <p>Forgot Password</p>
//                         <div className="auth-form-container text-start">
//                             <form className="auth-form" method="POST" onSubmit={forgotPassword} autoComplete={'off'}>
//                                 <div className="email mb-3">
//                                     <input type="email"
//                                         className={`form-control ${validate.validate && validate.validate.email ? 'is-invalid ' : ''}`}
//                                         id="email"
//                                         name="email"
//                                         value={email}
//                                         placeholder="Email"
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />

//                                     <div className={`invalid-feedback text-start ${(validate.validate && validate.validate.email) ? 'd-block' : 'd-none'}`} >
//                                         {(validate.validate && validate.validate.email) ? validate.validate.email[0] : ''}
//                                     </div>
//                                 </div>

//                                 <div className="text-center">
//                                     <button type="submit" className="btn btn-primary w-100 theme-btn mx-auto">Forgot Password</button>
//                                 </div>
//                             </form>

//                             <hr />
//                             <div className="auth-option text-center pt-2"><Link className="text-link" to="/login" >Back to Login</Link></div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// }

// export default Forgot;
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OtpInput = () => {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);
    const navigate = useNavigate()
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

    const handleChange = (index, value) => {
        const updatedOtp = [...otp];
        updatedOtp[index] = value;
        setOtp(updatedOtp);
    };

    const handleSubmit = (event) => {
        const data = new FormData(event.target);
        console.log(data);
        console.log(otp);
        event.preventDefault();
    };

    const inputFocus = (index, event) => {
        if (event.key === 'Delete' || event.key === 'Backspace') {
            const prev = index - 1;
            if (prev > -1) {
                document.getElementsByName(`otp${prev + 1}`)[0].focus();
            }
        } else {
            const next = index + 1;
            if (next < 5) {
                document.getElementsByName(`otp${next + 1}`)[0].focus();
            }
        }
    };

    return (
        <div className="container mt-5">



            <div className="row ">
                <div className="col-md-6 col-lg-6 col-sm-6 login-module-lg ">
                    <img src="https://www.foundit.in/rio/public/images/login-illustration.png" className="img-fluid" alt="Phone image" />
                    <p>Create your profile now and be visible to the top <br /> recruiters in the world</p>
                </div>

                <div className='col-md-6 col-lg-5 col-sm-6 offset-xl-1 pb-5'>
                    <form onSubmit={handleSubmit} >
                        <div className="otpContainer">
                            <h2>Forgot Password</h2>
                            <div className='d-flex'>
                                <p>Forgot Password
                                    We have sent an OTP to your email id <br />
                                    { } to set your new password.</p>
                                <p className='mt-5' type="button" style={{ color: "blue" }}
                                    onClick={() => { navigate("/login-modal") }}
                                >Change</p>
                            </div>
                            <div>

                                <p className="passwor-destination mb-1">Enter OTP</p>
                                <div className='d-flex'>
                                    <div className='d-flex'>
                                        {Array.from({ length: 5 }, (_, index) => (
                                            <input
                                                key={index}
                                                name={`otp${index + 1}`}
                                                type="text"
                                                inputMode="numeric"
                                                pattern="[0-9]*"
                                                autoComplete="off"
                                                // value={digit}

                                                className="otpInput rounded"
                                                value={otp[index]}
                                                onChange={(e) => handleChange(index, e.target.value)}
                                                tabIndex={index + 1}
                                                maxLength="1"
                                                onKeyUp={(e) => inputFocus(index, e)}
                                            />
                                        ))}
                                    </div>
                                    <p className='mt-5' type="button" style={{ color: "blue", marginLeft: '120px' }}
                                    >Resent</p>
                                </div>
                            </div>

                            <p className="passwor-destination">Set New Password</p>
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


                            </div>
                        </div>
                        <div className="mt-3">
                            <button style={{ width: "425px" }} type="submit" className="btn btn-primary py-3">Change Password</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OtpInput;
