function MentorTab(){

    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            {/* <h1>Mentor Tab Body 2 !</h1> */}
            <div className="mentoring_sec1 container">
                <input placeholder="Enter Register No." class="input-style row" type="text"/>
                <div className="row">
                    <p className="ms1-txt-style"><span>Mentee Name :&emsp; </span> FirstName LastName &emsp;&emsp; |  &ensp;&ensp; 2241XXX &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <span>Class : </span> X_XXX</p>
                </div>
            </div>
            <div className="mentoring_sec2 container">
                <div className="row">
                    <p className="sectionheadings">Last Session Details</p>
                    
                </div>
                <div className="row">
                    <p className="ms2-txt-style"><span>Date :&emsp; </span> DD/MM/YYYY &emsp;&emsp;  &ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <span>Time : &ensp;&ensp;</span> hh:mm AM</p>
                </div>
                <div className="row">
                    <p className="sectionheadings2">Main Topic of discussion</p>
                </div>
                <div className="row">
                    <p className="sectionsubheadings">Status</p>
                </div>
                <div className="row">
                    <p className="sectionsubheadings">Keywords</p>
                </div>
                <div className="row">
                    <p className="sectionsubheadings">Relation with previous sessions if-any</p>
                </div>
                <div className="row">
                    <p className="sectionsubheadings">Remarks</p>
                </div>
            </div>
        </div>
    );

}

export default MentorTab;