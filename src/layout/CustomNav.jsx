import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Toggle, Nav,
// Be sure to include styles at some point, probably during your bootstraping
// import "font-awesome-sprockets";

// import "font-awesome";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDetectOutsideClick } from "./useDetectOutsideClick"

function CustomNav() {
    const navigate = useNavigate()
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const sliderRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);

    // Add event listeners to handle clicks outside the slider
    useEffect(() => {
        function handleClickOutside(event) {
            if (sliderRef.current && !sliderRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        if (isOpen) {
            document.addEventListener('click', handleClickOutside);
        } else {
            document.removeEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);





    return (
        <div className='z-index-10'  >
            <SideNav onSelect={selected => { console.log(selected) }}
            >

                <SideNav.Toggle className="toggle-icon" />




                <SideNav.Nav defaultSelected="home" >

                    <NavItem>
                        <NavIcon ><i className='fa fa-fw fa-user' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText style={{ backgroundColor: "" }}>Hello & Welcome! </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon><i className='fa fa-fw fa-right-to-bracket' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText onClick={() => { navigate("/login-modal") }}> Login </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon><i className='fa fa-fw fa-user-shield' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText onClick={() => { navigate("/register") }}> Register </NavText>
                    </NavItem>
                    <NavItem>
                        <NavIcon><i className='fa fa-fw fa-servicestack' style={{ fontSize: "1.5em", color: "black" }} /></NavIcon>
                        <NavText>Premium Services </NavText>
                    </NavItem>

                </SideNav.Nav>

            </SideNav>
        </div>
    )
}

export default CustomNav;








// import { } from 'react';
// // import Button from 'react-bootstrap/Button';
// class Otpinput extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { value: '', otp1: "", otp2: "", otp3: "", otp4: "", otp5: "", disable: true };
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);

//     }


//     handleChange(value1, event) {

//         this.setState({ [value1]: event.target.value });
//     }

//     handleSubmit(event) {

//         const data = new FormData(event.target);
//         console.log(this.state);
//         event.preventDefault();
//     }

//     inputfocus = (elmnt) => {
//         if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
//             const next = elmnt.target.tabIndex - 2;
//             if (next > -1) {

//                 elmnt.target.form.elements[next].focus()
//             }
//         }
//         else {
//             console.log("next");

//             const next = elmnt.target.tabIndex;
//             if (next < 5) {
//                 elmnt.target.form.elements[next].focus()
//             }
//         }

//     }


//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="otpContainer">

//                     <input
//                         name="otp1"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp1}
//                         onKeyPress={this.keyPressed}
//                         onChange={e => this.handleChange("otp1", e)}
//                         tabIndex="1" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//                     />
//                     <input
//                         name="otp2"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp2}
//                         onChange={e => this.handleChange("otp2", e)}
//                         tabIndex="2" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//                     />
//                     <input
//                         name="otp3"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp3}
//                         onChange={e => this.handleChange("otp3", e)}
//                         tabIndex="3" maxLength="1" onKeyUp={e => this.inputfocus(e)}

//                     />
//                     <input
//                         name="otp4"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp4}
//                         onChange={e => this.handleChange("otp4", e)}
//                         tabIndex="4" maxLength="1" onKeyUp={e => this.inputfocus(e)}
//                     />

//                     <input
//                         name="otp5"
//                         type="text"
//                         autoComplete="off"
//                         className="otpInput"
//                         value={this.state.otp5}
//                         onChange={e => this.handleChange("otp5", e)}
//                         tabIndex="5" maxLength="1" onKeyUp={e => this.inputfocus(e)}
//                     />
//                 </div>
//                 <Button className="primary" type="submit">
//                     Submit
//                 </Button>
//             </form>
//         );
//     }
// }


// export default Otpinput;




