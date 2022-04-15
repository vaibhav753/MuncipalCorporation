//import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage';
import Complaint from './Components/complaints/Complaint';

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
import HODOnlineServices from './Components/hod/hodOnlineServices/HODOnlineServices';
import Table from './Components/payment/Table';
import CovidApp from './Components/CovidTracker/CovidApp';
import AllUserComplaints from './Components/complaints/AllUserComplaints';
import RegisteredComplaint from './Components/complaints/RegisteredComplaint';
import ComplaintDetails from './Components/complaints/ComplaintDetails';
import AuthenticatedRoute from './Components/AuthenticatedRoute';

import Admin from './Components/Admin/Admin';
import HODRegistration from './Components/Admin/HODRegistration';
import HODList from './Components/Admin/HODList';
import AddComplaint from './Components/Admin/AddComplaints';
import ComplaintListOperation from './Components/Admin/ComplaintListOperation';

import RazorP from './Components/payment/RazorP';
import Water from './Components/payment/Water';
import Property from './Components/payment/Property';

import BirthDetails from './Components/hod/hodOnlineServices/BirthDetails'
import BirthUVList from './Components/hod/hodOnlineServices/BirthUVList';
import BirthVList from './Components/hod/hodOnlineServices/BirthVList';
import BirthRejectedList from './Components/hod/hodOnlineServices/BirthRejectedList';

import DeathUVList from './Components/hod/hodOnlineServices/DeathUVList';
import DeathVList from'./Components/hod/hodOnlineServices/DeathVList';
import DeathRejectedList from './Components/hod/hodOnlineServices/DeathRejectedList';
import DeathDetails from './Components/hod/hodOnlineServices/DeathDetails';

import MarriageUVList from './Components/hod/hodOnlineServices/MarriageUVList';
import MarriageRejectedList from './Components/hod/hodOnlineServices/MarriageRejectedList';
import MarriageVList from './Components/hod/hodOnlineServices/MarriageVList';
import MarriageDetails from './Components/hod/hodOnlineServices/MarriageDetails';

import OnlineServices from './Components/onlineServices/OnlineServices';
import BirthRegistration from './Components/onlineServices/BirthRegistration';
import MarriageRegistration from './Components/onlineServices/MarriageRegistration';
import DeathRegistration from './Components/onlineServices/DeathRegistration';




function App() {

  return (
    <BrowserRouter>
      <div >
        <NavigationBar /><br /><br />

        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/covidTracker' element={<CovidApp />} />
          <Route path='/complaints' element={<Complaint />} />
          <Route path='/aboutUs' element={<AboutUs />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/login' element={<Login />}></Route>
          {/* <Route path='/newpayment' element={<NewPayment />}></Route> */}
          <Route path='/registration' element={<Registration />}></Route>
          <Route path='/touristGarden' element={<TouristGarden />}></Route>
          <Route path='/touristZoo' element={<TouristZoo />}></Route>
          <Route path='/hodhomepage' element={<HODHomePage />}></Route>

          <Route path='/complaintslist' element={<ComplaintList />}></Route>

          <Route path='/complaintscompletedlist' element={<ComplaintsCompletedList />}></Route>
          <Route path='/complaintsrejectedlist' element={<ComplaintsRejectedList />}></Route>
          <Route path='/HODOnlineServices' element={<HODOnlineServices />}></Route>
          <Route path='/table' element={<Table />}></Route>
          
          <Route path='/AllUserComplaints' element={<AllUserComplaints />}></Route>
          <Route path='/registeredcomplaint/:tokenId' element={<RegisteredComplaint />}></Route>
          <Route path='/complaintdetails/:tokenId' element={<ComplaintDetails />}></Route>

          <Route path='/admin' element={<Admin />}> </Route>
          <Route path='/hodRegistration' element={<HODRegistration />}></Route>
          <Route path='/HODlist' element={<HODList />}></Route>
          <Route path='/addComplaint' element={<AddComplaint />}></Route>
          <Route path='/removeComplaint' element={<ComplaintListOperation />}></Route>

          <Route path='/payment_gateway' element={<RazorP />}></Route>
          <Route path='/water/:conId' element={<Water />}></Route>
          <Route path='/property/:conId' element={<Property />}></Route>

          <Route exact path='/newpayment' element={<AuthenticatedRoute />}>
            <Route path='/newpayment' element={<NewPayment />}></Route>
          </Route>
		  
		  <Route path='/birthRegistration/uvlist' element={<BirthUVList />}></Route>
          <Route path='/birthRegistration/vlist' element={<BirthVList/>}></Route>
          <Route path='/birthRegistration/rejectedlist' element={<BirthRejectedList />}></Route>
          <Route path='/birthRegistration/birthDetails/:id' element={<BirthDetails/>}></Route>
		  
          <Route path='/deathRegistration/uvlist' element={<DeathUVList />}></Route>
          <Route path='/deathRegistration/vlist' element={<DeathVList />}></Route>
          <Route path='/deathRegistration/rejectedlist' element={<DeathRejectedList />}></Route>
          <Route path='/deathRegistration/deathDetails/:id' element={<DeathDetails/>}></Route>
		  
          <Route path='/marriageRegistration/uvlist' element={<MarriageUVList />}></Route>
          <Route path='/marriageRegistration/vlist' element={<MarriageVList />}></Route>
          <Route path='/marriageRegistration/rejectedlist' element={<MarriageRejectedList />}></Route>
          <Route path='/marriageRegistration/marriageDetails/:id' element={<MarriageDetails/>}></Route>

		 <Route exact path='/onlineServices' element={<AuthenticatedRoute />}>
         <Route path='/onlineServices' element={<OnlineServices />}></Route>
          </Route>
          {/* 
          <Route path='/onlineServices' element={<OnlineServices />}></Route> */}
          <Route path='/birthRegistration' element={<BirthRegistration />}></Route>
          <Route path='/marriageRegistration' element={<MarriageRegistration />}></Route>
          <Route path='/deathRegistration' element={<DeathRegistration />}></Route>

        </Routes>
        <Footer></Footer>
      </div>

    </BrowserRouter>

  );
}

export default App;
