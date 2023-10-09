import { } from 'react'
// import { Link } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { BsCalendar2PlusFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

import CapgeminiImg from "../assets/capgemini.jpeg";
import TCSImg from "../assets/tcs.jpeg";
import CocgnizantImg from "../assets/cocgnizant.jpeg";
import GenpactImg from "../assets/genpact.jpeg";
import InfosysImg from "../assets/infosys.jpeg";
import NessImg from "../assets/ness.jpeg";
import PublicesImg from "../assets/publicis.jpeg";
import QuessImg from "../assets/quess.jpeg";
import WtwImg from "../assets/wtw.jpeg";
import XorientImg from "../assets/xorient.jpeg";
import ZensorImg from "../assets/zensar.jpeg";

// const experience = [

//   { year: "Less than 1 Year" },
//   { year: "1 Year" },
//   { year: "2 Years" },
//   { year: "3 Years" },
//   { year: "4 Years" },
//   { year: "5 Years" },
//   { year: "6 Years" },
//   { year: "7 Years" },
//   { year: "8 Years" },
//   { year: "9 Years" },
//   { year: "Experience" }
// ]
function Home() {


  return (


    <>
      <div className='home-banner'>
        <div className="row d-flex p-2  ">
          <div className="col-lg-4 first-input d-flex">
            <BsSearch className='mt-5 search-icons'></BsSearch>
            <input type="text" placeholder=' Skills, Company or Job Title' />
            <BiMicrophone className='mt-5 mic-icon' />
          </div>
          <div className="col-lg-2  second-input">
            <ImLocation2 className='location-icon' />
            <select className="second-input" aria-label="Default select example">
              <option value="1">Location</option>
              {/* <option value="1">Top Location</option> */}
              <option value="1">Bengaluru/Bangalore</option>
              <option value="1">Hyderabad/Telangana</option>
              <option value="1">Gurgaon/Gurugram</option>
              <option value="1">Noida</option>
              <option value="1">Delhi</option>
              <option value="1">Chennai</option>
              <option value="1">Kolkata</option>
            </select>

            {/* <input type="text" placeholder='Location' /> */}
          </div>
          <div className="col-lg-2  third-input">
            <BsCalendar2PlusFill className='experience-icon' />
            <select className="form-selct experience-text" aria-label="Default select example">
              <option value="1">Experience</option>
              {/* <option value="1">Top Location</option> */}
              <option value="1">Less than 1 Year</option>
              <option value="1">1 Year</option>
              <option value="1">2 Years</option>
              <option value="1">3 Years</option>
              <option value="1"> 4 Years</option>
              <option value="1"> 5 Years</option>
              <option value="1">6 Years</option>
              <option value="1"> 7 Years</option>
            </select>
            {/* <select className="form-selct experience-text" aria-label="Default select example">
              <option selected>Fresher(less than 1 year)</option> 
               {experience.map(() => (
                 <option selected>{e.year}</option> 
              ))}
            </select> */}
          </div>
          <div className="col-lg-3">
            <button className='button-input '> Search</button>
          </div>
          {/* <Link to="#" className='advance-search'>Advanced Search</Link> */}
          <a href="#" className='advance-search'>Advanced Search</a>
        </div>
        <div className='text-center'>
          <h1>Find the job that is  <br />perfect for <span style={{ color: "#1f1fb2" }}>You</span> </h1>
          <button className='button-1 mx-3'>Upload Resume</button>
          <button className='button-2'>Register Now</button>
        </div>
      </div>


      <div className="container">
        <div className="row company-details">
          <h2>Employers of Choices</h2>
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide><img src={TCSImg} alt="" className='tcs-img' /></SwiperSlide>
            <SwiperSlide><img src={CapgeminiImg} alt="" className='tcs-img2' /></SwiperSlide>
            <SwiperSlide><img src={CocgnizantImg} alt="" className='tcs-img3' /></SwiperSlide>
            <SwiperSlide><img src={GenpactImg} alt="" className='tcs-img4' /></SwiperSlide>
            <SwiperSlide><img src={InfosysImg} alt="" className='tcs-img5' /></SwiperSlide>
            <SwiperSlide><img src={NessImg} alt="" className='tcs-img6' /></SwiperSlide>
            <SwiperSlide><img src={PublicesImg} alt="" className='tcs-img7' /></SwiperSlide>
            <SwiperSlide><img src={QuessImg} alt="" className='tcs-img8' /></SwiperSlide>
            <SwiperSlide><img src={WtwImg} alt="" className='tcs-img9' /></SwiperSlide>
            <SwiperSlide><img src={XorientImg} alt="" className='tcs-img10' /></SwiperSlide>
            <SwiperSlide><img src={ZensorImg} alt="" className='tcs-img11' /> </SwiperSlide>
            <SwiperSlide><img src={InfosysImg} alt="" className='tcs-img5' /></SwiperSlide>
            <SwiperSlide><img src={WtwImg} alt="" className='tcs-img9' /></SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className='top-companies'>
        <h1>Top Companies Hiring</h1>
        <div className="container mt-5 mb-4 all-images ">
          <div className="row " style={{ marginLeft: "200px" }}>
            <div className="col-lg-2  ">
              <div className="img-1">
                <p>Placed Candidate- 25+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-2">
                <p>Placed Candidate- 17+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-3">
                <p>Placed Candidate- 13+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-4">
                <p>Placed Candidate- 19+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-5">
                <p>Placed Candidate- 23+</p>
              </div>
            </div>
          </div>
        </div>
        <div className="container mb-5 all-images " >
          <div className="row " style={{ marginLeft: "200px" }}>
            <div className="col-lg-2  ">
              <div className="img-6">
                <p>Placed Candidate- 28+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-7">
                <p>Placed Candidate- 18+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-8">
                <p>Placed Candidate- 22+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-9">
                <p>Placed Candidate- 12+</p>
              </div>
            </div>
            <div className="col-lg-2 ">
              <div className="img-10">
                <p>Placed Candidate- 17+</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='remote-job'>
        <h1 className='text-center'>Remote Jobs</h1>
      </div>

      <div className="container mb-5 " style={{ cursor: "pointer" }}>
        <div className="row">
          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Gurgaon
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Hyderabad
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Delhi
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='remote-job'>
        <h1 className='text-center'>Pharmacy Jobs</h1>
      </div>

      <div className="container mb-5 " style={{ cursor: "pointer" }}>
        <div className="row">
          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Gurgaon
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Hyderabad
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Delhi
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='remote-job'>
        <h1 className='text-center'>Fresher Jobs</h1>
      </div>

      <div className="container mb-5 " style={{ cursor: "pointer" }}>
        <div className="row">
          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Gurgaon
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Hyderabad
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>


          <div className="col-lg-4">
            <div className='shadow px-3 rounded'>
              <div className="d-flex p-2 justify-content-between w-100">
                <span>Hot</span>
                <span> 0 days ago</span>

              </div>
              <h4 className='fw-bold fs-5'>Sap Functional Consultant- <br /> Gurugram</h4>
              <p>v tech solutions </p>
              <span>

                <BsCalendar2PlusFill /> 0 to 3 Yrs
              </span>
              <span className='ms-3'>
                <ImLocation2 />
                Delhi
              </span>
              <div className="d-flex mt-2 para-pp">
                <p className=' ' >Be an Early Applicant</p>
                <p className='ms-2 ' >Remote</p>
                <p className='ms-2 ' >9 Position</p>
              </div>
              <div className="d-flex justify-content-between w-100 p-2 ">
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Not Intrested</span>
                <span style={{ color: "#7c44ff" }} className='fw-bold'>Apply</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home