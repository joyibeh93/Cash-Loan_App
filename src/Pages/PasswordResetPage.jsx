import React from 'react';
import LoginBg from '../Components/LoginBg';
import ResetPasswordForm2 from '../Components/ResetPasswordForm2';

const PasswordResetPage = () => {
  return (
    <div className="container">
      <div className="left-side">
        <LoginBg />
      </div>
      <div className="right-side">
        <ResetPasswordForm2 />
      </div>
    </div>
  );
};

export default PasswordResetPage;
