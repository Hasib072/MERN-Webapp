function StudentCard(props) {


    const regTxt = props.regTxt;
    const nameTxt = props.nameTxt;
    const attPer = props.attPer;
    const prvGPA = props.prvGPA;
    const attMentoring = props.attMentoring;
    const lmDate = props.lmDate;
    return(
        <div className="SCard">
            <div className="StudentCard">
            <div className="container-fluid CardTop">
                <div className="row">
                    <div className="circular-profile-image">
                        <img src="https://via.placeholder.com/95" alt="Profile" />
                    </div>
                </div>
            </div>
            <div className="row RegTxt">
                <p className="row">{regTxt}</p>
            </div>
            <div className="row NameTxt">
                <p className="row">{nameTxt}</p>
            </div>
            <div className="CardLow">
                <div className="detailBox">
                    <p className="detailheadings">Attendence:  <span className="detailval">{attPer}%</span></p>
                    <p className="detailheadings">GPA(Previous Semester): <span className="detailval"> {prvGPA}</span></p>
                    <p className="subdetailheadings">Mentoring Attendance <br/><span className="detailval">{attMentoring}</span><br/>Last Mentoring Date<br/><span className="detailval">{lmDate}</span></p>
                    <p className="subdetailheadings"><span className="detailval"></span></p>
                    
                </div>
            </div>
            </div>
        </div>
    );
}

export default StudentCard;