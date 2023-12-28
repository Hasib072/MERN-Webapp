function ReportsTab(){
    
    const MentorArray = [["Mentor Name 1","Mentor ID", "XX"],
    ["Mentor Name 2","Mentor ID", "XX"],
    ["Mentor Name 3","Mentor ID", "XX"],
    ["Mentor Name 4","Mentor ID", "XX"],];
    
    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div className="at_box row">
                <div className="mentor_section col">
                    <ul>
                    {MentorArray.map((mentor, index) => (
                        <li key={index}>
                        <div className="mentor_row">
                            <div className="mentor_row_detail1">
                                <p>{mentor[0]} | {mentor[1]}</p>
                            </div>
                            <div className="mentor_row_detail2">
                                <p>Mentor no : {mentor[2]}</p>
                            </div>
                        </div>
                      </li>
                    ))}
                    </ul>
                </div>
                <div className="mentee_section col">
                <div className="mentor_row">
                        <div className="mentor_row_detail1">
                        <p>Mentee Name | RegNo: 2241XXX</p>
                        </div>
                        <div className="mentor_row_detail2">
                        <p>No of Session : xx</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default ReportsTab;