function ProfileDropDown({onLoggin}) { 

  const handleLoggingOut = (isvalid) => {
    onLoggin(isvalid);
    console.log(isvalid);
  };

    return (
        <div className="profile-dropdown-wrap" id="sub-menu">
              <div className="profile-dropdown">
                <a href="#" className="droptxt"><span className="fa fa-gear"></span>&ensp;Settings<br /></a>
                <a href="#" className="droptxt" onClick={() => {handleLoggingOut(0)}}><span className="fa fa-power-off"></span>&ensp;Sign Out</a>
              </div>
        </div>
    );
}

export default ProfileDropDown;