import React from 'react';
import cash2goLogo from '../assets/Cash2go_logo.svg';
import brandName from '../assets/Cash2go_logo2.svg';

const Logo = () => {
  return (
    <div className="sidebarlogo1">
      <img src={cash2goLogo} alt="cash2gologo" className='sidelogo1'/>
      <img src={brandName} alt="brandname" className='sidelogo2' />
    </div>
  );
};

export default Logo;
