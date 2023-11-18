

function LoginPage(props){
  

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
            <img className="toplogo" src="assets/Logo.jpg"></img>
            <div className="user-profile">
              
            </div>
          </nav>
          </div>
      </div>

      <h2>Login</h2>
          <form onSubmit={handleLoggingin}>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Enter your username" required></input>
          <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
            <br/>
            <br/>
            <button>Login</button>
          </form>

        <div>
            
        </div>


      </div>
    );
}

export default LoginPage;