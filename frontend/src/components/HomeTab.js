import React, { useEffect, useState} from 'react';
import axios from 'axios';
import RecentMentee from './RecentMentee';

function HomeTab(props){

    const [userdata,setUserdata] = useState([]);
    
    const fetchData = async() => {
    const {data} = await axios.get(`/api/users/${props.uid}`); 
    setUserdata(data);
  }

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
                <button className="button-27" role="button"><i className="material-icons sbicon">person</i><span> Mentor Profile</span></button>
                <button className="button-27" role="button"><i className="material-icons sbicon">person</i><span> View Report</span></button>
              </div>
              <div className='row'>
                <button className="button-27" role="button"><i className="material-icons sbicon">person</i><span> Mentee Profile</span></button>
                <button className="button-27" role="button"><i className="material-icons sbicon">person</i><span> Attendence</span></button>
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