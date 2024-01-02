import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
  

function MentorTab(){
    const [isExpanded, setIsExpanded] = useState(false);
    
    const toggleCard = () => {
        setIsExpanded(!isExpanded);
      };
    
      const [tags, setTags] = useState([]);
      const [newTag, setNewTag] = useState('');
    
      const handleAddTag = (e) => {
        e.preventDefault();
        const trimmedNewTag = newTag.trim();
        if (trimmedNewTag !== '' && !tags.includes(trimmedNewTag)) {
          setTags([...tags, trimmedNewTag]);
          setNewTag('');
        } else {
            alert('Tag already exists!'); // Display alert if the tag already exists
          }
      };
    
      const handleRemoveTag = (indexToRemove) => {
        const updatedTags = tags.filter((_, index) => index !== indexToRemove);
        setTags(updatedTags);
      };

      
      const [selectedDate, setSelectedDate] = useState(null);
      const [selectedTime, setSelectedTime] = useState(new Date());
    
      const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
      const handleTimeChange = (time) => {
        setSelectedTime(time);
      };



    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            {/* <h1>Mentor Tab Body 2 !</h1> */}
            <div className="mentoring_sec1 container">
                <form>
                    <input placeholder="Enter Register No." class="input reg_input row" type="text"/>
                </form>
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
                <form>
                    
                <div className="row">
                    <p className="sectionheadings" >New Session Details</p>
                    <p className="sectionheadings-right" >Session Id: xxxxxxx</p>
                    {/* <img className="editicon" src="assets/steppers_.svg" alt="expand" /> */}
                </div>
                <div className="row DndT">
                <div className="ms2-txt-style row">
                    <div className='col-4'>
                    <span>Time : &ensp;&ensp;</span>
                    <DatePicker
                    className='time_picker'
                      selected={selectedTime}
                      onChange={handleTimeChange}
                      showTimeSelect
                      showTimeSelectOnly
                      timeIntervals={15}
                      dateFormat="h:mm aa"
                    />
                    </div>
                    <div className='col-4'>             
                    <span>Date :&emsp; </span>
                    <DatePicker
                    className='date_picker'
                      selected={selectedDate}
                      onChange={handleDateChange}
                      dateFormat="dd/MM/yyyy"
                    />
                    </div>
                </div>
                </div>
                <div className="row">
                    <p className="sectionheadings2">Main Topic of discussion</p>
                    <input class="input topic_input" name="text" type="text" placeholder="Title..."></input>
                </div>
                <div className="row">
                    <p className="sectionheadings2">Keywords :</p>
                </div>
                <div className='tag-container'>
                {tags.map((tag, index) => (
                    <div className='tag' key={index}>
                        {tag}
                        <span className="material-symbols-outlined" onClick={() => handleRemoveTag(index)}>
                          close
                        </span>
                  </div>
                ))}
                </div>
                <div>
                    <input
                      className="input tag_input"
                      name="text"
                      type="text"
                      placeholder="Add Keywords..."
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                    />
                    <button className="button-27 add_btn" onClick={handleAddTag} role="add">
                      <span>Add</span>
                    </button>
                </div>

                <div className='session_status'>
                        <p className="sectionheadings2" >Status :</p>
                        <ul>
                            <li>
                                <input type="radio" id="raised" name="status" value="raised"/>
                                <label for="raised">Raised</label>
                            </li>
                            <li>
                                <input type="radio" id="hold" name="status" value="hold"/>
                                <label for="hold">Hold</label>
                            </li>
                            <li>
                                <input type="radio" id="discussed" name="status" value="discussed"/>
                                <label for="discussed">Discussed</label>
                            </li>
                            <li>
                                <input type="radio" id="solved" name="status" value="solved"/>
                                <label for="solved">Solved</label>
                            </li>
                        </ul> 
                        
                </div>

                <div className='row'>
                    <p className="sectionheadings2">Relation to previous Session</p>
                    <input class="input sesssion_relation_input" name="text" type="text" placeholder="Session Id || Date || Topic of discussion"></input>
                </div>

                <div className='remark_box row'>
                    <p className="sectionheadings2 row">Remarks :</p>
                    <textarea class="input remark_input row" name="text" type="text" placeholder="Remarks"></textarea>
                </div>
                </form>
            </div>
            
        </div>
    );

};

export default MentorTab;