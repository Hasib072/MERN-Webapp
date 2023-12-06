
function MenteeCard(props) {
    return(
        <div style={{marginRight: 15, marginLeft: 15 }} className="col-2 menteeCard">
        <div style={{width: '100%', height: '100%', position: 'relative'}}>
            <div style={{width: 230, height: 380, left: 0, top: 0, position: 'absolute', background: 'white', boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.04)', borderRadius: 12}}></div>
            <img style={{width: 80, height: 80, left: 71, top: 19, position: 'absolute', borderRadius: 60, border: '3px white solid'}} src="https://via.placeholder.com/95x95" alt="" />
            <div style={{width: 108, left: 68, top: 131, position: 'absolute', color: '#110000', fontSize: "0.85rem", fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>Sample Name</div>
            <div style={{width: 69, left: 85, top: 108, position: 'absolute', color: '#110000', fontSize: "0.85rem", fontFamily: 'Montserrat', fontWeight: '500', wordWrap: 'break-word'}}>2241XXX</div>
            <div style={{width: 250, height: 181, left: 14, top: 175, position: 'absolute'}}>
            <div style={{width: 210, height: 190, left: -4, top: 0, position: 'absolute', background: '#F5F5F5', borderRadius: 9}}></div>
            <div style={{width: 231, left: -37, top: 137, position: 'absolute', textAlign: 'right'}}><span style={{color: '#434343', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '300', wordWrap: 'break-word'}}>Last Mentoring Date<br/></span><span style={{color: 'black', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>00/00/0000</span></div>
            <div style={{width: 224, left: 10, top: 19, position: 'absolute'}}><span style={{color: '#434343', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '300', wordWrap: 'break-word'}}>Attendance</span><span style={{color: '#606060', fontSize: 14, fontFamily: 'Montserrat', fontWeight: '300', wordWrap: 'break-word'}}> : </span><span style={{color: 'black', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>92%</span></div>
            <div style={{width: 231, left: 10, top: 43, position: 'absolute'}}><span style={{color: '#606060', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '300', wordWrap: 'break-word'}}>GPA(Previous Semester) : </span><span style={{color: 'black', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>3.2</span></div>
            <div style={{left: 55.73, top: 97, position: 'absolute', textAlign: 'right'}}><span style={{color: '#434343', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '300', wordWrap: 'break-word'}}>Mentoring Attendance<br/></span><span style={{color: 'black', fontSize: "0.82rem", fontFamily: 'Montserrat', fontWeight: '400', wordWrap: 'break-word'}}>8</span></div>
            </div>
        </div>
        </div>
    );
}

export default MenteeCard