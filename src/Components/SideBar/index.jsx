import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, message, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Features/Authentication/loginSlice";
import { useDispatch } from "react-redux";

function Navbar() {
  const user = JSON.parse(sessionStorage.getItem("user"));
  const name = user?.username;

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const handleLogout =()=>{
    sessionStorage.clear();
    dispatch(logout());
    navigate('/')
  }

  const onClick = ({ key }) => {
    if(key === '1'){
      handleLogout()
    }
  };
  const items = [
    {
      label: 'Logout',
      key: '1',
    },
   
  ];

  return (
    <>
      <IconContext.Provider value={{ color: "#770267" }}>
        {sidebar && <div className="blur-overlay" />}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <Dropdown menu={{ items, onClick }} >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="logout">
                Welcome, {name}
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
          {/* <div className='logout'>Welcome, {name}</div> */}
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
