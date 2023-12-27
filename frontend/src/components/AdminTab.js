function ReportsTab(){

    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div className="at_box row">
                <div className="mentor_section col">
                    <div className="mentor_row">
                        <div className="mentor_row_detail1">
                        <p>Mentor Name | Mentor ID</p>
                        </div>
                        <div className="mentor_row_detail2">
                        <p>Mentor no : xx</p>
                        </div>
                    </div>
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