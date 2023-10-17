import { Component } from 'react'
import { useNavigate } from 'react-router-dom'
export default class SignUp extends Component {
    render() {
        const navigate = useNavigate()
        return (

            <form>
                <h3>Sign Up</h3>
                <div className="mb-3">
                    <label>First name</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                    />
                </div>
                <div className="mb-3">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>
                <div className="mb-3">
                    <label>Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                    />
                </div>
                <div className="mb-3">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                    />
                </div>
                <div className="d-grid">
                    <button type="submit" className="btn btn-primary">
                        Sign Up
                    </button>
                </div>
                <p className="forgot-password text-right">
                    Already registered <a onClick={() => { navigate("/login-modal") }}>sign in?</a>
                </p>
            </form>
        )
    }
}



// import React from 'react'

// function SignUp() {
//     return (
//         <div>SignUp</div>
//     )
// }

// export default SignUp








// <BrowserRouter>
// <Routes>
//   <Route path='/' element={<LoginNew />}></Route>
//   <Route path='/signup' element={<SignUp from />}></Route>
// </Routes>
// </BrowserRouter>