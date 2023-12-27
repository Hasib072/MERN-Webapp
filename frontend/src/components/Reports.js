function ReportsTab(){

    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div className="mentoring_sec1 container">
                <form>
                    <input placeholder="Enter Register No." class="input reg_input row" type="text"/>
                </form>
                <div className="row">
                    <p className="ms1-txt-style"><span>Mentee Name :&emsp; </span> FirstName LastName &emsp;&emsp; |  &ensp;&ensp; 2241XXX &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <span>Class : </span> X_XXX</p>
                </div>
            </div>
        </div>
    );

}

export default ReportsTab;