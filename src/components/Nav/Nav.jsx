import {React,useState} from 'react'
import './Nav.css'
import { CiMenuFries } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import SignIn from '../UserAuth/SignIn';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Nav = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [loginFormOpen,setLoginFormOpen] = useState(false);

    
    const cartItems = useSelector((state)=>state.cartData.cartItems);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    console.log(cartItems)

    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const iconColor = isHomePage ? '#fff' : 'blue';

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setLoginFormOpen(false)
  };

  const toggleLogin = () => {
    setLoginFormOpen(!loginFormOpen);
  }

  
  return (
    <div className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="navbar-left">
       <Link to="/">
        {/* <img src="/logo.png" alt="Logo" className="logo" /> */}
       <h1 style={{ color: iconColor }} >SAROJeats</h1>
       </Link> 
      </div>
        {
            !isMenuOpen ? (
             <div className="navbar-right">
               <div style={{ position: 'relative', display: 'inline-block' }}>
                    <Link to="/cart">
                      <IoCartOutline className="cart-icon" style={{ color: iconColor }} />
                      {totalQuantity > 0 && (
                        <span className='cart-qty'
                        >
                          {totalQuantity}
                        </span>
                      )}
                    </Link>
                </div>

                 <CiMenuFries className="menu-icon" onClick={toggleMenu} style={{ color: iconColor }} />       
             </div>
            ) : null
        }
      {isMenuOpen && (
        <div className="menu-drawer">
          <div className="drawer-top-menu">
            {
              !loginFormOpen ? (
                <>
                <CiSearch className='search-icon' />
                <FaRegUser className='user-icon' onClick={toggleLogin} />
                </>
              ) : null
            }
            <IoCloseOutline className='close-icon' onClick={toggleMenu} />
          </div>
          {
            !loginFormOpen ? (
              <ul className="menu-list">
                <Link to="/" onClick={toggleMenu}><li>Home</li></Link>
                <li>Shop</li>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
              </ul>
            ) : (
               <SignIn/>
                )
          }
         
        </div>
      )}
    </div>
  )
}

export default Nav