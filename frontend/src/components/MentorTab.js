import React, { useState } from 'react';


function MentorTab(){
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleCard = () => {
        setIsExpanded(!isExpanded);
      };

    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            {/* <h1>Mentor Tab Body 2 !</h1> */}
            <div className="mentoring_sec1 container">
                <input placeholder="Enter Register No." class="input reg_input row" type="text"/>
                <div className="row">
                    <p className="ms1-txt-style"><span>Mentee Name :&emsp; </span> FirstName LastName &emsp;&emsp; |  &ensp;&ensp; 2241XXX &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <span>Class : </span> X_XXX</p>
                </div>
            </div>
            <div className={`container ${isExpanded ? 'mentoring_sec2_exp' : 'mentoring_sec2'}`}>
                <div className="row" onClick={toggleCard}>
                    <p className="sectionheadings pointerarrow" >Last Session Details</p>
                    <img className="steppers pointerarrow" src="assets/steppers_.svg" alt="expand" />
                </div>
                    {isExpanded && ( <div>

                    
                    
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

                </div>)}
            </div>

            <div className='container mentoring_sec2_exp'>
                <div className="row">
                    <p className="sectionheadings" >New Session Details</p>
                    {/* <img className="editicon" src="assets/steppers_.svg" alt="expand" /> */}
                </div>
                <div className="row DndT">
                    <p className="ms2-txt-style"><span>Date :&emsp; </span> DD/MM/YYYY &emsp;&emsp;  &ensp;&ensp; &ensp;&ensp;&ensp;&ensp;&ensp;&ensp; <span>Time : &ensp;&ensp;</span> hh:mm AM</p>
                </div>
                <div className="row">
                    <p className="sectionheadings2">Main Topic of discussion</p>
                    <input class="input topic_input" name="text" type="text" placeholder="Title..."></input>
                </div>
                <div className="row">
                    <p className="sectionheadings2">Keywords :</p>
                </div>
                <div className='tag-container'>
                    <div className='tag'>
                        Sample Tag <span class="material-symbols-outlined">close</span>
                    </div>
                    <div className='tag'>
                        Another Tag <span class="material-symbols-outlined">close</span>
                    </div>
                    <div className='tag'>
                        New Tag <span class="material-symbols-outlined">close</span>
                    </div>
                </div>
                <div>
                    <input class="input tag_input" name="text" type="text" placeholder="Add Keywords..."></input>
                    <button className="button-27 add_btn" role="button"><span> Add</span></button>
                </div>
            </div>
            
        </div>
    );

}

export default MentorTab;