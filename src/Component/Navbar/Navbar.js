import React, { useContext, useState } from 'react';
import './Navbar.css';
import { BsBlockquoteRight, BsFillCaretRightFill, BsX } from "react-icons/bs";
const logo = `https://react-projects-13-stripe-submenus.netlify.app/static/media/logo.1090473d.svg`;

const getData = [
  {
    name : 'home',
    text : 'home Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, corporis fuga sunt inventore alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea doloribus culpa sit eveniet architecto ipsa officiis sint ab tenetur illo!'
  },
  {
    name : 'home 1',
    text : 'home 1 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, corporis fuga sunt inventore alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, officia.'
  },
  {
    name : 'home 2',
    text : 'home 2 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, corporis fuga sunt inventore alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repudiandae nihil aut. Ut, perferendis! Mollitia nihil distinctio nesciunt a magnam.'
  },
  {
    name : 'home 3',
    text : 'home 3 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, corporis fuga sunt inventore alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Error ex assumenda laborum? Architecto nulla id quasi pariatur! Eum.'
  },
  {
    name : 'home 4',
    text : 'home 4 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, corporis fuga sunt inventore alias.Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus rem repellat molestiae vero molestias! Doloribus architecto blanditiis possimus dignissimos illum, repellendus quidem vitae voluptatum sed officia tempore numquam labore dolor.'
  },
  {
    name : 'home 5',
    text : 'home 5 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit sint, corporis fuga sunt inventore alias.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, nostrum esse aliquid porro provident eum iure, sunt earum veniam labore corporis cum alias, possimus doloremque!'
  },
];

const Navbar = () => {
  const [menuData,setMenuData] = useState(getData[0]);
  const [menu,setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu);
  }
  const handleMouseOver = (e) => {
    const data = e.target.innerText;
    const tostringdata = data.toLowerCase();
    const findData = getData.find((items) => items.name === tostringdata);
    setMenuData(findData);
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
                    <a onMouseOver={handleMouseOver} href="#">home <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a onMouseOver={handleMouseOver} href="#">home 1 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a onMouseOver={handleMouseOver} href="#">home 2 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a onMouseOver={handleMouseOver} href="#">home 3 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a onMouseOver={handleMouseOver} href="#">home 4 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                  <li>
                    <a onMouseOver={handleMouseOver} href="#">home 5 <span className="font_manu_left"><BsFillCaretRightFill /></span></a>
                  </li>
                </ul>
              </div>
              <div className="col-md-10">
                {
                  <p>{menuData?.text}</p>
                }
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