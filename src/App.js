
import SignUpStep1 from './Pages/SignUpStep1';
import SignUpStep2 from './Pages/SignUpStep2';
import Dashboard from './Pages/Dashboard';
import './index.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//import SignUpStep1 from './Pages/SignUpStep1';
//import SignUpStep2 from './Pages/SignUpStep2';
//import Dashboard from './Pages/Dashboard';
import ResetPassword from './Pages/ResetPassword';
import SignUpStep4 from './Pages/SignUpStep4';
import SignUpStep3 from './Pages/SignUpStep3page';
import Login from './Pages/Login';
import PasswordResetPage from './Pages/PasswordResetPage';
import PredictionInfoPage from './Pages/PredictionInfoPage';
import ContactInfoPage from './Pages/ContactInfoPage';
import ResetPassword3page from './Pages/ResetPassword3page';
import LoanDefaultPage from './Pages/LoanDefaultPage'
import BvnPage from './Pages/BvnPage';
import Message from './Pages/Message';
import Application from './Pages/Application';
import Applicantinfo from './Pages/ApplicantInfo'
import Notification from './Pages/Notification';
import ReviewPage from './Pages/ReviewPage';
import Analytics from './Pages/Analytics';
import Recovery from './Pages/Recovery';
import Settings from './Pages/Settings';
import ApplicationData from './Components/ApplicationData';

function App() {
<ApplicationData/>

  return (
    <Router>
      <Routes>
        <Route path="/bvn" element={<BvnPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signupstep2" element={<SignUpStep2 />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/signupstep4" element={<SignUpStep4 />} />
        <Route path="/signupstep3" element={<SignUpStep3 />} />
        <Route exact path="/" element={<Login />} />
        <Route path="/signupstep1" element={<SignUpStep1 />} />
        <Route path="/resetpassword2/:email" element={<PasswordResetPage />} />

        {/* <Route path="/resetpassword2" element={<PasswordResetPage />} /> */}

        <Route path="/predictioninfo" element={<PredictionInfoPage />} />
        <Route path="/contactinfo" element={<ContactInfoPage />} />
        <Route path="/resetpassword3/:email" element={<ResetPassword3page />} />

        {/* <Route path="/resetpassword3" element={<ResetPassword3page />} /> */}

        <Route path="/bvn" element={<BvnPage />} />
        <Route path="/loandefault" element={<LoanDefaultPage />} />
        <Route path="/application" element={<Application />} />
        <Route path="/message" element={<Message />} />
        {/* <Route path="/resetpassword3" element={<ResetPassword3page />} /> */}

        <Route path="/applicantinfo/:id" element={<Applicantinfo />} />



        <Route path="/notification" element={<Notification />} />
        <Route path="/review" element={<ReviewPage />} />
        <Route path="/setting" element={<Settings />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/recovery" element={<Recovery />} />
        <Route path="/settings" element={<Settings />} />
        
        
      </Routes>
    </Router>
  );
}

export default App;
