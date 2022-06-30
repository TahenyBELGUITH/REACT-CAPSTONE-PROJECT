import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { TiArrowBackOutline } from 'react-icons/ti';
import { BsMic } from 'react-icons/bs';
import { AiOutlineSetting } from 'react-icons/ai';

const Navbar = () => {
  const navDetails = <TiArrowBackOutline className="ArrowBack" />;
  const location = useLocation();
  const ArrowBack = location.pathname.includes('country') ? navDetails : '';
  return (
    <nav>
      <div className=" navItems">
        <NavLink exact="true" to={{ pathname: '/' }} className="Arrow">
          {ArrowBack}
        </NavLink>
        <h1 className="title1 dynamic-text-shadow"> COVID-STATISTICS </h1>
        <div className="icons">
          <BsMic />
          <AiOutlineSetting />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
