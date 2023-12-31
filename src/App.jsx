import { Routes, Route } from "react-router-dom";
import Registerm from "./user/Registerm";
import Loginm from "./user/Loginm";
import Forgotm from "./user/Forgotm"

import { } from 'react'
import NavBar from "../src/layout/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
// import Forgot from './user/Forgot';

import Home from "./view/Home";
import Footer from "./layout/Footer";
import LoginModal from "./user/LoginModal";
import NewLogin from "./user/NewLogin";

// import Sliderl from "./view/Sliderl";






function App() {


  return (
    <>

      {/* <LoginModal /> */}
      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Loginm />} />
        {/* <Route path='/logins' element={<NewLogin />} /> */}
        <Route path='/register' element={<Registerm />} />
        <Route path='/forgot-password' element={<Forgotm />} />

        <Route path='/' component={Loginm} />
        <Route path='/login-modal' element={<LoginModal />} />
      </Routes>
      <Footer />

    </>
  )
}

export default App
