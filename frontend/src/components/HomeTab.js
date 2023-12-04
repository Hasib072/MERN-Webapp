import React, { useEffect, useState} from 'react';
import axios from 'axios';


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
              <h2>Quick Action</h2>
              
            </div>
            <div className='rmclass'>
              <h2>Recent Mentees</h2>
              <h5>{userdata.content}</h5>
            </div>
            
        </div>
    );

}

export default HomeTab;