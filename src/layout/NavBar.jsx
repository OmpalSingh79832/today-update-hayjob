import { } from 'react'
// import { Link } from "react-router-dom";
import "../index.css"
// import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNav from './CustomNav';
import Logo from "../assets/logo.jpeg"
import "../layout/Responsive.css"
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const navigate = useNavigate()
  return (
    <>
      <CustomNav />
      <nav className="navbar" >
        <div className='d-flex justify-content-between' style={{ width: "97%" }}>
          <img src={Logo} alt="" className='nav-logo' />
          <div>
            <ul className="nav-list">
              <li className="nav-item dropdown">
                <span className="dropdown-text" >Skill Tests</span>
                <div className="dropdown-menu" style={{ width: "-88rem", left: "-150px" }}>
                  <div className="d-flex justify-content-between">
                    <ul >
                      <li className="dropdown-item" style={{ fontWeight: "700", fontSize: "16px" }}> Back-end Developer</li>
                      <li className="dropdown-item">Java</li>
                      <li className="dropdown-item"> Python</li>
                      <li className="dropdown-item"> PHP</li>
                      <li className="dropdown-item">Node.Js</li>
                    </ul>
                    <ul >
                      <li className="dropdown-item" style={{ fontWeight: "700", fontSize: "16px" }}> Front-end Developer</li>
                      <li className="dropdown-item">React.Js</li>
                      <li className="dropdown-item">Angular.Js</li>
                    </ul>
                    <ul >
                      <li className="dropdown-item" style={{ fontWeight: "700", fontSize: "16px" }}> Full-stack Developer</li>
                      <li className="dropdown-item">MERN</li>
                      <li className="dropdown-item"> MEAN</li>
                      <li className="dropdown-item"> SERN</li>
                      <li className="dropdown-item">Java & SQL</li>
                    </ul>
                    <ul >
                      <li className="dropdown-item" style={{ fontWeight: "700", fontSize: "16px" }}> Data Analyst</li>
                      <li className="dropdown-item">Tableau</li>
                      <li className="dropdown-item">Python</li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text" >Premium Services
                </span>
                <ul className="dropdown-menu">
                  <li className="dropdown-item"> Featured Profile</li>
                  <li className="dropdown-item">Resume Writing</li>
                  <li className="dropdown-item"> Career Booster</li>
                  <li className="dropdown-item">Profile Highlighter</li>
                  <li className="dropdown-item">LinkedIn Makeover</li>
                  <li className="dropdown-item">Mock Interview</li>
                  <li className="dropdown-item">Premium Resume Builder</li>
                  <li className="dropdown-item">Interview Preparation</li>
                  <li className="dropdown-item">Talk To Us</li>
                  <li className="dropdown-item">MentorConnect</li>
                  <li className="dropdown-item">Online Degree Programs</li>
                  <li className="dropdown-item">Udemy Courses</li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text trainning-system" style={{ paddingRight: "90px" }}>Trainning </span>
              </li>
              <div className='vr' style={{ height: "40px", width: "2px", marginTop: "10px" }}></div>
              {/* <Link to="/login"> */}
              <li className="nav-item dropdown">

                <span className="dropdown-text border-left-0 border-warning mx-3" onClick={() => { navigate("/login") }}>Login</span>
              </li>
              {/* </Link> */}
              <li className="nav-item dropdown">
                <span className="dropdown-text" style={{ color: "black" }}>Register</span>
              </li>
              <li className="nav-item dropdown">
                <span className="dropdown-text" >Employers Login</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>

  )
}

export default NavBar