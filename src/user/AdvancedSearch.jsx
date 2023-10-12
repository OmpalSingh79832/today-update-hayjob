import { } from 'react'
import { ImLocation2 } from "react-icons/im";
import { BsSearch } from "react-icons/bs";

const AdvancedSearch = () => {

    return (
        <>

            <div>
                <a type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Advanced Search
                </a>
                {/* Modal */}
                <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog ">
                        <div className="modal-content content-height">
                            <div className="modal-header ">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Advanced Search</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body">

                                <div className="container d-flex flex-wrap">
                                    <div className="col-lg-6  key-skill-input">
                                        <p>Key Skills</p>
                                        <BsSearch className='serach-bar'></BsSearch> <input type="text" placeholder='Enter Job Keywords' />
                                    </div>
                                    <div className="col-lg-6 key-skill-location">
                                        <p>Location</p>
                                        <ImLocation2 className='location-icon-adv' />
                                        <select className="second-inpu" aria-label="Default select example">
                                            <option value="1" >Location</option>
                                            <option value="2">Bengaluru/Bangalore</option>
                                            <option value="3">Hyderabad/Telangana</option>
                                            <option value="4">Gurgaon/Gurugram</option>
                                            <option value="5">Noida</option>
                                            <option value="6">Delhi</option>
                                            <option value="7">Chennai</option>
                                            <option value="8">Kolkata</option>
                                        </select>
                                    </div>
                                    <div className="container d-flex flex-wrap">
                                        <div className="col-lg-3 years-of-e">
                                            <p className='mt-3 expert'>Experience</p>
                                            <select aria-label="" className='years-of-ex'>
                                                <option value="1">Years</option>
                                                <option value="1">Fresher( less than 1 year)</option>
                                                <option value="1">1 Year</option>
                                                <option value="1">2 Years</option>
                                                <option value="1">3 Years</option>
                                                <option value="1">4 Years</option>
                                                <option value="1">5 Years</option>
                                                <option value="1">6 Years</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-3 ">
                                            <select className="years-of-ex-month" aria-label="">
                                                <option value="1">Months</option>
                                                <option value="1">0 Month</option>
                                                <option value="1">1 Month</option>
                                                <option value="1">2 Months</option>
                                                <option value="1">3 Months</option>
                                                <option value="1">4 Months</option>
                                                <option value="1">5 Months</option>
                                                <option value="1">6 Months</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-6 key-skill-location expected-salary">
                                            <p>Salary</p>
                                            <select className="second-inpu" aria-label="Default select example">
                                                <option value="1" >Expected Salary</option>
                                                <option value="2">100000</option>
                                                <option value="3">200000</option>
                                                <option value="4">300000</option>
                                                <option value="5">400000</option>
                                                <option value="6">500000</option>
                                                <option value="7">600000</option>
                                                <option value="8">700000</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className='d-flex industry-bs'>
                                        <div className="col-lg-6 key-skill-location expected-salary">
                                            <p>Industry</p>
                                            <select className="second-inpu" aria-label="Default select example">
                                                <option value="1" >Industry</option>
                                                <option value="2">Advertising/PR/Events</option>
                                                <option value="3">Agriculture</option>
                                                <option value="4">Alternate Energy</option>
                                                <option value="5">Software Developer</option>
                                                <option value="6">Front-End Developer</option>
                                                <option value="7">Back-End Developer</option>
                                                <option value="8">BDE</option>
                                            </select>
                                        </div>

                                        <div className="col-lg-6 key-skill-location expected-salary">
                                            <p>Function</p>
                                            <select className="second-inpu" aria-label="Default select example">
                                                <option value="1" >Function</option>
                                                <option value="2">Admin</option>
                                                <option value="3">Advertising</option>
                                                <option value="4">Analytics</option>
                                                <option value="5">Banking</option>
                                                <option value="6">Construction</option>
                                                <option value="7">Health Care</option>
                                                <option value="8">Retail Chains</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer advanced-search-btn">
                                <button type="button" className="btn btn-primary">Show Jobs</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdvancedSearch