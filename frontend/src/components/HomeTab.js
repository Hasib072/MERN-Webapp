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
            <h1>..... Home Tab Body 1! {userdata.content}</h1>
            
        </div>
    );

}

export default HomeTab;