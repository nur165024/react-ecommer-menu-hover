import React, { useState } from 'react';
import './Navbar.css';
import { BsBlockquoteRight, BsFillCaretRightFill, BsX } from "react-icons/bs";
const logo = `https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg`;

const Navbar = () => {
  const [menu,setMenu] = useState(false);
  const handleClickMenu = () => {
    setMenu(!menu);
  }
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-brand">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="" />
          </a>
          
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <button onClick={handleClickMenu} className="btn btn-light">
                {
                  !menu ? <BsBlockquoteRight /> : <BsX />
                }
              </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {
        menu ? <section id="websiteMenu">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <ul className="mainMenu">
                  <li>
                    <a href="#">home <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a href="#">home 1 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a href="#">home 2 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a href="#">home 3 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a href="#">home 4 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a href="#">home 5 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                </ul>
              </div>
              <div className="col-md-10">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, explicabo nulla voluptatibus saepe repellat omnis deleniti totam dolores doloribus dignissimos debitis! Quos sequi tempora hic culpa dolores voluptatibus officia magni.</p>
              </div>
            </div>
          </div>
        </section>
        : ''
      }
    </>
  );  
};

export default Navbar;