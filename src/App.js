import React from 'react';
import './App.css';
import './App2.css';
import Home from './pages/home';
import BITSPilani from './pages/about/bpgc';
import BPGCMathDept from './pages/about/bpgcbiodept';
import CTCPB from './pages/about/ctcpb';
import PTCAI from './pages/about/ptcai';
import Speakers from './pages/speakers';
// import Timeline from './pages/timeline';
import Committee from './pages/commitee/committee';
// import OrgCommittee from './pages/commitee/orgcommitee';
// import TechProCommittee from './pages/commitee/techprocommitee';
// import ConfRegFee from './pages/registration/confregfee';
// import PayRegFee from './pages/registration/payregfee';
import RegistrationNew from './pages/registration/registration-new'
import PastEditions from './pages/pasteditions';
import BPGCGoa from './pages/venue/bpgcgoa';
import HowToReach from './pages/venue/howtoreach';
import Accomodation from './pages/venue/accomodation';
import Sponsorship from './pages/sponsorship';
import Contact from './pages/contact';
import ErrorPage from './pages/errorpage';
import { Routes, Route } from "react-router-dom";
import MyNavBar from './layouts/navbar';
import MyFooter from './layouts/footer';
import ScrollToTop from './layouts/scrolltotop';
import Notification from './layouts/notification';

function App() {
  return (
    <div className="App" style={{"display": "flex","min-height": "100vh", "flex-direction": "column", "justify-content": "flex-start"}}>
		<Notification />
		<MyNavBar />
		<ScrollToTop>
		<Routes>
			<Route exact path='/' element = {<Home/> } />
			<Route exact path='/about/bitspilani' element = {<BITSPilani />} />
			<Route exact path='/about/bpgcbiodept' element = {<BPGCMathDept />} />
			<Route exact path='/about/ctcpb' element = {<CTCPB />} />
			<Route exact path='/about/ptcai' element = {<PTCAI />} />
			<Route exact path='/speakers' element = {<Speakers />} />
			<Route exact path='/committee' element = {<Committee />} />
			<Route exact path='/sponsorship' element = {<Sponsorship />} />
			{/*
			<Route exact path='/timeline' element = {<Timeline />} />
			<Route exact path='/committee/patrons' element = {<Patrons />} />
			<Route exact path='/committee/orgcommittee' element = {<OrgCommittee />} />
			<Route exact path='/committee/techprocommittee' element = {<TechProCommittee />} />
			*/}
			<Route exact path='/registration' element = {<RegistrationNew />} />
			<Route exact path='/pasteditions' element = {<PastEditions />} />
			<Route exact path='/venue/bpgc-goa' element = {<BPGCGoa />} />
			<Route exact path='/venue/howtoreach' element = {<HowToReach />} />
			<Route exact path='/venue/accomodation' element = {<Accomodation />} />
			<Route exact path='/contact' element = {<Contact />} />
			<Route exact path='/*' element = {<ErrorPage />} />
		</Routes>
		</ScrollToTop>
		<MyFooter />
    </div>
  );
}

export default App;
