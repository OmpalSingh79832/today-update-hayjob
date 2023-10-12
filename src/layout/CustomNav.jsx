import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Toggle, Nav,
// Be sure to include styles at some point, probably during your bootstraping
// import "font-awesome-sprockets";

// import "font-awesome";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function CustomNav() {
    const navigate = useNavigate()
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='z-index-10'>
            <SideNav onSelect={selected => { console.log(selected) }}
            >
                <SideNav.Toggle className="toggle-icon" />
                <SideNav.Nav defaultSelected="home" className={click ? ".sidenav---sidenav-nav---3tvij sidenav---expanded---1KdUL active" : " "} onClick={() => { handleClick }}>
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

export default CustomNav




// import { Link, NavLink } from 'react-router-dom';
// import {
//     ProSidebar,
//     Menu,
//     MenuItem,
//     SubMenu,
//     SidebarHeader,
//     SidebarFooter,
//     SidebarContent
// } from 'react-pro-sidebar';
// import {
//     FaUser,
//     FaAngleDoubleLeft,
//     FaAngleDoubleRight,
//     FaTachometerAlt,
//     FaGem,
//     FaList,
//     FaRegLaughWink,
//     FaHeart
// } from 'react-icons/fa';
// import sidebarBg from '../assets/jio.png';

// export const CustomNav = ({
//     image,
//     collapsed,
//     toggled,
//     handleToggleSidebar,
//     handleCollapsedChange
// }) => {
//     return (
//         <ProSidebar
//             image={image ? sidebarBg : false}
//             collapsed={collapsed}
//             toggled={toggled}
//             onToggle={handleToggleSidebar}
//             breakPoint="md"
//         >
//             {/* Header */}
//             <SidebarHeader>
//                 <Menu iconShape="circle">
//                     {collapsed ? (
//                         <MenuItem
//                             icon={<FaAngleDoubleRight />}
//                             onClick={handleCollapsedChange}
//                         ></MenuItem>
//                     ) : (
//                         <MenuItem
//                             suffix={<FaAngleDoubleLeft />}
//                             onClick={handleCollapsedChange}
//                         >
//                             <div
//                                 style={{
//                                     padding: '9px',
//                                     textTransform: 'uppercase',
//                                     fontWeight: 'bold',
//                                     fontSize: 15,
//                                     letterSpacing: '1px'
//                                 }}
//                             >
//                                 Pro Sidebar
//                             </div>
//                         </MenuItem>
//                     )}
//                 </Menu>
//             </SidebarHeader>
//             {/* Content */}
//             <SidebarContent>
//                 <Menu iconShape="circle">
//                     <MenuItem
//                         icon={<FaTachometerAlt />}
//                         suffix={<span className="badge red">NEW</span>}
//                     >
//                         Dashboard
//                         <NavLink to="/" />
//                     </MenuItem>
//                     {/* <MenuItem icon={<FaGem />}>Components </MenuItem> */}
//                     <MenuItem icon={<FaGem />}>
//                         Components <Link to="/components" />
//                     </MenuItem>
//                     <SubMenu
//                         suffix={<span className="badge yellow">3</span>}
//                         title={'With Suffix'}
//                         icon={<FaRegLaughWink />}
//                     >
//                         <MenuItem>Submenu 1</MenuItem>
//                         <MenuItem>Submenu 2</MenuItem>
//                         <MenuItem>Submenu 3</MenuItem>
//                     </SubMenu>
//                     <SubMenu
//                         prefix={<span className="badge gray">3</span>}
//                         title={'With Prefix'}
//                         icon={<FaHeart />}
//                     >
//                         <MenuItem>Submenu 1</MenuItem>
//                         <MenuItem>Submenu 2</MenuItem>
//                         <MenuItem>Submenu 3</MenuItem>
//                     </SubMenu>
//                     <SubMenu title={'Multi Level'} icon={<FaList />}>
//                         <MenuItem>Submenu 1 </MenuItem>
//                         <MenuItem>Submenu 2 </MenuItem>
//                         <SubMenu title={'Submenu 3'}>
//                             <MenuItem>Submenu 3.1 </MenuItem>
//                             <MenuItem>Submenu 3.2 </MenuItem>
//                         </SubMenu>
//                     </SubMenu>
//                 </Menu>
//             </SidebarContent>
//             {/* Footer */}
//             <SidebarFooter style={{ textAlign: 'center' }}>
//                 <div className="sidebar-btn-wrapper" style={{ padding: '16px' }}>
//                     <Link
//                         className="sidebar-btn"
//                         style={{ cursor: 'pointer' }}
//                         to="/profile"
//                     >
//                         <FaUser />
//                         <span>My Account</span>
//                     </Link>
//                 </div>
//             </SidebarFooter>
//         </ProSidebar>
//     );
// };


