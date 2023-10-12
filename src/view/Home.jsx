import { } from 'react'
import { BsSearch } from "react-icons/bs";
import { BiMicrophone } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { BsCalendar2PlusFill } from "react-icons/bs";
import "../layout/Responsive.css";
import Sliderl from './Sliderl';
import { Cost } from '../Cost';
import AdvancedSearch from '../user/AdvancedSearch';
function Home() {

  return (
    <>
      <div className='home-banner' style={{ backgroundColor: "#f6f0fa", height: "378px" }}>
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
          <a href="#" className='advance-search'><AdvancedSearch /></a>
        </div>
        <div className='text-center'>
          <h1>Find the job that is  <br />perfect for <span style={{ color: "#1f1fb2" }}>You</span> </h1>
          <button className='button-1 mx-3'>Upload Resume</button>
          <button className='button-2'>Register Now</button>
        </div>
      </div>

      <Sliderl />

      <div className='top-companies'>
        <h1>Top Companies Hiring</h1>
        <div className="container mt-5 mb-4 all-images ">
          <div className="row placed-candidate" style={{ marginLeft: "200px" }}>
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
      <Cost />
    </>
  )
}

export default Home