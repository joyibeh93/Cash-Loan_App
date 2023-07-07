import React from 'react';
import Logo from '../Components/Logo';
import '../LoginBg.css';
import Laptopimg from '../assets/Laptop 1.png';
import Quote from './Quote';

const LoginBg = () => {
  return (
    <div>
      <div className="background">
        <div className="background-image">
          <img src={Laptopimg} alt="laptop-img" />
        </div>
        <div className="logo-container">
          <Logo />
          <div className="quote">
            <Quote />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginBg;
