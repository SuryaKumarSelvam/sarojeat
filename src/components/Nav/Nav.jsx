import {React,useState} from 'react'
import './Nav.css'
import { CiMenuFries } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-left">
        {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
        <h1 style={{ color:"white" }}  >SAROJeats</h1>
      </div>
        {
            !isMenuOpen ? (
             <div className="navbar-right">
                 <IoCartOutline className="cart-icon" />
                 <CiMenuFries className="menu-icon" onClick={toggleMenu}/>       
             </div>
            ) : <></>
        }
      {isMenuOpen && (
        <div className="menu-drawer">
          <div className="drawer-top-menu">
            <CiSearch className='search-icon' />
           <FaRegUser className='user-icon' />
            <IoCloseOutline className='close-icon' onClick={toggleMenu} />
          </div>
          <ul className="menu-list">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Nav