import { useState } from "react";

function ReportsTab(){
    
    const [selectedMentor, setSelectedMentor] = useState(null);
    const [isAddMenteeModalOpen, setAddMenteeModalOpen] = useState(false);

    const mentorData = [
        { name: 'Some Name', mentor_id: 'xxxxxx'},
        { name: 'Name Here', mentor_id: 'xxxxxx'},
        { name: 'Mentor 3', mentor_id: 'xxxxxx'},
        { name: 'Mentor 4', mentor_id: 'xxxxxx'},
        { name: 'Mentor 5', mentor_id: 'xxxxxx'},

        // Add more mentors as needed
      ];
    
      const menteeData = [
        [
          { name: 'Mentee 1', regNo: 'R1', sessions: 3 },
          { name: 'Mentee 2', regNo: 'R2', sessions: 5 },
          { name: 'Mentee 2', regNo: 'R2', sessions: 5 },
          { name: 'Mentee 2', regNo: 'R2', sessions: 5 },

          // Add more mentees for Mentor 1
        ],
        [
          { name: 'Mentee 3', regNo: 'R3', sessions: 4 },
          { name: 'Mentee 4', regNo: 'R4', sessions: 6 },
          // Add more mentees for Mentor 2
        ],
        [],
        [],
        [],
        // Add more arrays for additional mentors
      ];
      
      const getNumberOfMentees = (mentorIndex) => {
        return menteeData[mentorIndex] ? menteeData[mentorIndex].length : 0;
      };

      const openAddMenteeModal = () => {
        setAddMenteeModalOpen(true);
        console.log("Open");
      };
      const closeAddMenteeModal = () => {
        setAddMenteeModalOpen(false);
      };

      const addMentee = () => {
        // Add logic for adding a mentee to the selected mentor here
        // update the menteeData array
        closeAddMenteeModal();
      };

    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div className="at_box row">
                <div className="mentor_set col">
                    <div className="mentor_section col">
                        <ul>
                        {mentorData.map((mentor, index) => (
                            <li key={index} onClick={() => setSelectedMentor(index)}>
                                <div className={`mentor_row ${selectedMentor === index ? 'selected' : ''}`}>
                                  <div className="mentor_row_detail1">
                                    <p>{mentor.name} | {mentor.mentor_id}</p>
                                  </div>
                                  <div className="mentor_row_detail2">
                                    <p>Mentees: {getNumberOfMentees(index)}</p>
                                  </div>
                                </div>
                          </li>
                        ))}
                        </ul>
                    </div>
                    <button className="add-mentor-btn" role="button"><span>Add Mentor Profile</span></button>
                </div>
                <div className="mentee_set col">
                    <div className="mentee_section col">
                        <ul>
                        {selectedMentor !== null &&
              menteeData[selectedMentor].map((mentee, index) => (
                <li key={index}>
                  <div className="mentor_row">
                    <div className="mentor_row_detail1">
                      <p>{mentee.name} | RegNo: {mentee.regNo}</p>
                    </div>
                    <div className="mentor_row_detail2">
                      <p>No of Session : {mentee.sessions}</p>
                    </div>
                  </div>
                </li>
              ))}
                        </ul>
                    </div>
                    <button
                        className={`add-mentee-btn ${selectedMentor === null ? 'disabled' : ''}`}
                        role="button"
                        onClick={openAddMenteeModal}
                        disabled={selectedMentor === null}
                    ><span>Add Mentee Profile</span></button>
                    {isAddMenteeModalOpen && (
          <div className="add-mentee-modal">
            {/* Your modal content goes here */}
            <button onClick={addMentee}>Add Mentee</button>
            <button onClick={closeAddMenteeModal}>Cancel</button>
          </div>
        )}
                </div>
            </div>
        </div>
    );

}

export default ReportsTab;