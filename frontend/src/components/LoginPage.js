import { useState } from "react";
import axios from "axios";
function LoginPage(props){
  
  const [data,setData] = useState({
    uid: '',
    password: '',
  })

  async function submit(e) {
    e.preventDefault();
    
  }

  const handleLoggingin = (e) => {
    props.onLoggin(e);
    
    // console.log(isvalid);
    const uname = e.target.username.value;
    const pass = e.target.password.value;
    console.log(uname);
    console.log(pass);
    props.logID(uname);
  };

    return(
        <div>
          
        <div className="container-fluid">
          <div className="row">
          <nav className="col topbar">
            <img className="toplogo" src="assets/Logo.jpg" alt="none"></img>
            <div className="user-profile">
              
            </div>
          </nav>
          </div>
      </div>

      <div className="login-container">
        <h1>Login</h1>
          <form action="POST" onSubmit={handleLoggingin} className="logForm">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required value={data.uid} onChange={(e) => setData({...data, uid: e.target.value})} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button type="submit">Login</button>
          </form>
      </div>

        


      </div>
    );
}

export default LoginPage;