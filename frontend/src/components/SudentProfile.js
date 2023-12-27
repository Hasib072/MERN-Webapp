
import React from 'react';
import { useState } from 'react';
import DonutChart from "./DonutChart";



function StudentProfile(props) {

    

    

    const [overlayVisible, setOverlayVisible] = useState(false);
    const [overlayVisible1, setOverlayVisible1] = useState(false);

    
        
   

    function togglePopup() {
        setOverlayVisible(!overlayVisible);
        console.log(overlayVisible);
        const overlay = document.getElementById('overlay');
        const popup = document.getElementById('popup');
        overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
        popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    }
    
    function togglePopup1() {
        setOverlayVisible1(!overlayVisible1);
        console.log("Detail Popup");
        const overlay = document.getElementById('overlay-new');
        const popup = document.getElementById('popup-new');
        overlay.style.display = (overlay.style.display === 'block') ? 'none' : 'block';
        popup.style.display = (popup.style.display === 'block') ? 'none' : 'block';
    }
    
    function saveDetails() {
        const name = document.querySelector('.popup input:nth-child(1)').value;
        const email = document.querySelector('.popup input:nth-child(2)').value;
        alert(`Details Saved!\nName: ${name}\nEmail: ${email}`);
        togglePopup()
    }
    
    function saveChanges() {
        var newDetail1 = document.getElementById("edit-detail-1").value || " ";
        var newDetail2 = document.getElementById("edit-detail-2").value || " ";
        var newDetail3 = document.getElementById("edit-detail-3").value || " ";
        var newDetail4 = document.getElementById("edit-detail-4").value || " ";
        var newDetail5 = document.getElementById("edit-detail-5").value || " ";
    
        
        document.getElementById("readonly-detail-1").value = newDetail1;
        document.getElementById("readonly-detail-2").value = newDetail2;
        document.getElementById("readonly-detail-3").value = newDetail3;
        document.getElementById("readonly-detail-4").value = newDetail4;
        document.getElementById("readonly-detail-5").value = newDetail5;
    
        togglePopup1();
    }
    
    
    return(
        <div className="col main">
            <div className="main-div-container">
        <div className="main-div-container-studentsidebox">
            <div className="main-div-container-studentsidebox-inner">
                <img className="main-div-container-studentsidebox-student-img" src="/Assets/profile.png"
                    alt="Profile Image"/>
                <p className="main-div-container-studentsidebox-regno">XXXXXXX</p>
                <p className="main-div-container-studentsidebox-regno">Sample Name</p>
            </div>
            <ul className="main-div-container-studentsidebox-UL">
                <li>Course: </li>
                <li>Department: </li>
                <li>Semester: </li>
                <li>Date of Birht: </li>
                <li>Gender: </li>
                <li>Phone No.: </li>
                <li>Email ID: </li>
                <li>Address: </li>
                <li> </li>
            </ul>
            <hr className="main-div-container-studentsidebox-hr"/>
            <ul className="main-div-container-studentsidebox-UL">
                <li>Family Details: </li>
                <li>Father: </li>
                <li>Mother: </li>
                <li>Siblings: </li>
                <li> </li>
                <li> </li>
            </ul>
        </div>
        <div className="main-div-container-academichistory">
            <div className="main-div-container-academichistory-grapher">
                <DonutChart percent={72}/>
                <DonutChart percent={45}/>
                <DonutChart percent={90}/>
                <div>
                    <button className="popbuttonstyle" onClick={togglePopup}>Edit</button>
                </div>
            </div>


            <div className={`overlay ${overlayVisible ? 'popped' : ''}`} id="overlay"></div>
            <div className={`popup ${overlayVisible ? 'popped' : ''}`} id="popup">
                <button className="close-btn" onClick={togglePopup}>&times;</button>
                <h2>Enter Details</h2>
                <table>
                    <tr>
                        <th>Subjects</th>
                        <th>CIA 1</th>
                        <th>CIA 2</th>
                        <th>CIA 3</th>
                    </tr>
                    <tr>
                        <td>Sample Subject</td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                    </tr>
                    <tr>
                        <td>Sample Subject</td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                    </tr>
                    <tr>
                        <td>Sample Subject</td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                    </tr>
                    <tr>
                        <td>Sample Subject</td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                    </tr>
                    <tr>
                        <td>Sample Subject</td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                        <td>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000" />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000" />
                        </td>
                    </tr>
                </table>
                <button className='Save-btn' onclick="saveDetails()">Save</button>
            </div>
            <div className="final_sample">
                <table>
                    <tr>
                        <div className="sampler">
                            <th className="newtagger sampler1">Subjects</th>
                            <th className="newtagger sampler1">CIA 1</th>
                            <th className="newtagger sampler1">CIA 2</th>
                            <th className="newtagger sampler1">CIA 3</th>
                        </div>
                    </tr>
                    <tr>
                        <td className="newtagger">Subject</td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                    </tr>
                    <tr>
                        <td className="newtagger">Sample Subject</td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                    </tr>
                    <tr>
                        <td className="newtagger">Sample Subject</td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                    </tr>
                    <tr>
                        <td className="newtagger">Sample Subject</td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                    </tr>
                    <tr>
                        <td className="newtagger">Sample Subject</td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                        <td className="newtagger">
                            <input type="text" pattern="\d*" title="Format: 123" maxlength="3" placeholder="000"
                                value="900" readonly />
                            <span className="slash">/</span>
                            <input type="text" pattern="\d*" title="Format: 456" maxlength="3" placeholder="000"
                                value="900" readonly />
                        </td>
                    </tr>




                </table>
            </div>

        </div>
        <div className="main-div-conatiner-extracc">

            <div className="overlay" id="overlay-new"></div>
            <div className="popup" id="popup-new">
                <button className="close-btn" onClick={togglePopup1}>&times;</button>
                <h2>Extra Circular</h2>
                <ul>
                    <li><input type="text" className="inputer" id="edit-detail-1" placeholder="Enter detail 1"/></li>
                    <li><input type="text" className="inputer" id="edit-detail-2" placeholder="Enter detail 2"/></li>
                    <li><input type="text" className="inputer" id="edit-detail-3" placeholder="Enter detail 3"/></li>
                    <li><input type="text" className="inputer" id="edit-detail-4" placeholder="Enter detail 4"/></li>
                    <li><input type="text" className="inputer" id="edit-detail-5" placeholder="Enter detail 5"/></li>
                </ul>
                <button onClick={saveChanges}>Save</button>
            </div>

            <div className="user-details-form">
                <div>
                    <label>Details: <button className="ExtraDetailPlacer" onClick={togglePopup1}>Edit1</button></label>

                </div>
                <ul>
                    <li><input type="text" className="inputer" id="readonly-detail-1"  readOnly/></li>
                    <li><input type="text" className="inputer" id="readonly-detail-2"  readOnly/></li>
                    <li><input type="text" className="inputer" id="readonly-detail-3"  readOnly/></li>
                    <li><input type="text" className="inputer" id="readonly-detail-4"  readOnly/></li>
                    <li><input type="text" className="inputer" id="readonly-detail-5"  readOnly/></li>
                </ul>
            </div>
        </div>

    </div>
        </div>
    );
}
export default StudentProfile;