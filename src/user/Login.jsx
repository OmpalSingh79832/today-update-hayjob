import { useState, useEffect } from 'react'
import { BsGoogle } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import GoogleplayImg from "../assets/googleplay.png";
import AppstoreImg from "../assets/appstore.png"
import '../index.css';
// material


const Login = () => {
    // const [email, setEmail] = useState('');
    const [password, setPassword] = useState({
        password: "",
        showPassword: false,
    });
    // const [allEntry, setAllEntry] = useState([]);
    const [inputFields, setInputFields] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [submitting, setSubmitting] = useState(false);

    // const submitForm = (e) => {
    //     e.preventDefault();

    //     const newEntry = { email: email, password: password };
    //     setAllEntry([...allEntry, newEntry]);
    //     console.log(allEntry)
    // }
    const validateValues = (inputValues) => {
        let errors = {};
        if (inputValues.email.length < 15) {
            errors.email = "Email is too short";
        }
        if (inputValues.password.length < 5) {
            errors.password = "Password is too short";
        }
        return errors;
    };
    const handleChange = (e) => {
        setInputFields({ ...inputFields, [e.target.name]: e.target.value });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(validateValues(inputFields));
        setSubmitting(true);
    };
    const finishSubmit = () => {
        console.log(inputFields);
    };
    useEffect(() => {
        if (Object.keys(errors).length === 0 && submitting) {
            finishSubmit();
        }
    }, [errors]);

    // pass
    const handleClickShowPassword = () => {
        setPassword({ ...password, showPassword: !password.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <div className='login-to-register'>
                <p>New to HayJob?<button type=''>Register</button></p><hr style={{ width: "35%" }} />
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
            {Object.keys(errors).length === 0 && submitting ? (
                <span className="success" style={{ color: "green" }}>Successfully submitted ✓</span>
            ) : null}
            <form action="" onSubmit={handleSubmit} className='login-page'>
                <div className='email-text'>
                    <label htmlFor="email">Email ID/Phone Number</label><br />
                    <input type="text" name='email' placeholder='Enter Email ID/Phone Number' id='email' autoComplete='off'
                        value={inputFields.email}
                        onChange={handleChange}
                    />
                    {errors.email ? (
                        <p className="error" style={{ color: "red" }}>
                            Email should be at least 15 characters long
                        </p>
                    ) : null}
                </div>
                <div className='password-text'>
                    <label htmlFor="password" >Password</label><br />
                    <input name='password' placeholder='Enter Your Password' id='password' autoComplete='off'

                        onClick={(e) => e.target.value}
                        type={password.showPassword ? "text" : "password"}
                        value={password.password}
                        onChange={(e) => setPassword(e.target.value)}
                    // onChange={handleChange}
                    // onChange={e => { setPassword(e); this.handleChange() }

                    />
                    <span className='show-hide' onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {password.showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </span>
                    {errors.password ? (
                        <p className="error" style={{ color: "red" }}>
                            Please Enter Your Password
                        </p>
                    ) : null}
                    <br />



                    {/*  */}

                    {/*  */}
                    <button type='' className='foget-pass'>Forget Password?</button>
                </div>
                <button type='submit' className='login-btn'>Login</button><br />
                <button type='submit' className='login-bia-otp'>Login via OTP</button>
                <div className='card shadow download-page'>
                    <span>Your dream job is a click away! Get <br /> the app on your mobile.</span>
                    <div className='d-flex '>
                        <img src={GoogleplayImg} alt="" className='google-img' />
                        <img src={AppstoreImg} alt="" className='app-img' />
                    </div>
                </div>
            </form>
            <div>

            </div>
        </>
    )
}

export default Login