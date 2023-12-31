import React, { useEffect, useState} from 'react';
import axios from 'axios';
import RecentMentee from './RecentMentee';

function HomeTab({uid,onTabChange}){

    const [userdata,setUserdata] = useState([]);
    
    const fetchData = async() => {
    const {data} = await axios.get(`/api/users/${uid}`);
    setUserdata(data);
  }

  const handleSideTabHighlite = (tabNo) => {
    console.log("From HomeTab : " + tabNo);
    onTabChange(tabNo);
  };

  useEffect(() => {
    fetchData();
    console.log(userdata.content);
  },[])

    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div>
              <h2 className='headingHome1'>Quick Action</h2>
              <div className='row'>
                <button onClick={() => handleSideTabHighlite(2)} className="button-27" role="button"><i className="material-icons sbicon">person</i><span> Mentor Profile</span></button>
                <button onClick={() => handleSideTabHighlite(4)} className="button-27" role="button"><i className="material-icons sbicon">person</i><span> View Report</span></button>
              </div>
              <div className='row'>
                <button onClick={() => handleSideTabHighlite(3)} className="button-27" role="button"><i className="material-icons sbicon">person</i><span> Mentee Profile</span></button>
                <button onClick={() => handleSideTabHighlite(5)} className="button-27" role="button"><i className="material-icons sbicon">person</i><span> Attendence</span></button>
              </div>
            </div>
            <div className='rmclass'>
              <h2 className='headingHome1'>Recent Mentees</h2>
              <div className='RMContainer container'>
                {/* <h5 className='row'>{userdata.content}</h5> */}
                <RecentMentee/>
                <RecentMentee/>
                <RecentMentee/>
                <RecentMentee/>

              </div>
            </div>
            
        </div>
    );

}

export default HomeTab;