
import React, { useState, useEffect } from 'react';

import TopBar from './components/TopBar';
import Sidebar from './components/Sidebar';
import MainBody from './components/MainBody';
import HomeTab from './components/HomeTab';
import MentorTab from './components/MentorTab';
import MenteeTab from './components/MenteeTab';
import ReportsTab from './components/Reports';
import LoginPage from './components/LoginPage';
import StudentProfile from './components/SudentProfile';
import axios from 'axios';



let M_Name = "Sample - Name";

function App() {
  const [activeTab, setactiveTab] = useState(1);

  const handleTabChange = (value) => {
    setactiveTab(value);
  };

  

  const [userdata,setUserdata] = useState([]);
  const [uid,setUid] = useState(0);

  const handleLogid = (vid) => {
    setUid(vid);
    console.log(vid);
  };
  
  console.log(uid);
  
  const fetchData = async() => {
    const {data} = await axios.get(`/api/users/${uid}`); 
    setUserdata(data);
  }


  M_Name = userdata.uname;

  let mainBodyToRender;
  
  if (activeTab === 1) {
    mainBodyToRender = <HomeTab uid={uid} />;
  } else if (activeTab === 2) {
    mainBodyToRender = <MentorTab />;
  } else if (activeTab === 3) {
    mainBodyToRender = <MenteeTab onTabChange={handleTabChange}/>;
  } else if (activeTab === 4) {
    mainBodyToRender = <ReportsTab />;
  } else if (activeTab === 5) {
    mainBodyToRender = <StudentProfile />;
  } else {
    mainBodyToRender = <MainBody />;
  }
  

  const [isLoggedin, setisLoggedin] = useState(0);

  const handleLoggin = (value) => {
    setisLoggedin(value);
  };

  

  

  if (isLoggedin === 0) {
    return (
      <LoginPage onLoggin={handleLoggin} logID={handleLogid}/>
    );
  }else {
    fetchData();
    return (
      <div className="App">
        <TopBar mentorName={M_Name} onLoggin={handleLoggin}/>
        <div className='row'>
          <Sidebar onTabChange={handleTabChange} />
          
          {mainBodyToRender}
          
  
        </div>
      </div>
    );

  }

  
}

export default App;
