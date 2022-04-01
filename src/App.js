//import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Complaint from './Components/complaints/Complaint';
import OnlineServices from './Components/onlineServices/OnlineServices';
import BirthRegistration from './Components/onlineServices/BirthRegistration';
import MarriageRegistration from './Components/onlineServices/MarriageRegistration';
import DeathRegistration from './Components/onlineServices/DeathRegistration';
import NavigationBar from './Components/navbar/NavigationBar';
import AboutUs from './Components/navbar/AboutUs';
import Contact from './Components/navbar/Contact';
import Registration from './Components/navbar/Registration';
import Login from './Components/navbar/Login';
import NewPayment from './Components/payment/NewPayment';
import TouristGarden from './Components/navbar/TouristGarden';
import TouristZoo from './Components/navbar/TouristZoo';
import Footer from './Components/Footer';
import HODHomePage from './Components/hod/HODHomePage';
import ComplaintList from './Components/complaints/ComplaintList';
import ComplaintsCompletedList from './Components/complaints/ComplaintsCompletedList';
import ComplaintsRejectedList from './Components/complaints/ComplaintsRejectedList';
import HODOnlineServices from './Components/hod/HODOnlineServices';
import Table from './Components/payment/Table';
import UVList from './Components/onlineServices/UVList';
import VList from './Components/onlineServices/VList';
import RejectedList from './Components/onlineServices/RejectedList';
function App() {

  return (
    <BrowserRouter>
      <div >
      <NavigationBar /><br/><br/>
      
        <Routes>
         
          <Route path='/' element={<HomePage />} />
          <Route path='/complaints' element={<Complaint />} />
          
          <Route path='/onlineServices' element={<OnlineServices/>}></Route>
          <Route path='/birthRegistration' element={<BirthRegistration/>}></Route>
          <Route path='/marriageRegistration' element={<MarriageRegistration/>}></Route>
          <Route path='/deathRegistration' element={<DeathRegistration/>}></Route>
          <Route path='/aboutUs' element={<AboutUs/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/deathRegistration' element={<Registration/>}></Route>
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/newpayment' element={<NewPayment/>}></Route>
          <Route path='/registration' element={<Registration/>}></Route>
          <Route path='/touristGarden'element={<TouristGarden/>}></Route>
          <Route path='/touristZoo' element={<TouristZoo/>}></Route>
          <Route path='/hodhomepage' element={<HODHomePage/>}></Route>
          <Route path='/complaintslist' element={<ComplaintList/>}></Route>
          <Route path='/complaintscompletedlist' element={<ComplaintsCompletedList />}></Route>
          <Route path='/complaintsrejectedlist' element={<ComplaintsRejectedList />}></Route>
          <Route path='/HODOnlineServices' element={<HODOnlineServices/>}></Route>
          <Route path='/table' element={<Table/>}></Route>
          <Route path='/uvlist' element={<UVList/>}></Route>
          <Route path='/vlist' element={<VList/>}></Route>
          <Route path='/rejectedlist' element={<RejectedList/>}></Route>
          

        </Routes>
        
      </div>
      <Footer></Footer>
    </BrowserRouter>

  );
}

export default App;
