import React, { useState } from 'react';
// import MenteeCard from "./MenteeCard";
import StudentCard from './StudentCard';
function MenteeClassCardHolder({classn,onTabChange}) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
        
    };

    const class_name = classn;

    return(
        <div className="MenteeCardsSet">
            <div onClick={toggleExpand} className="row">
            
            <p className="col Class_Name">{class_name}</p>
            <i className={isExpanded ? "fa fa-chevron-up" : "fa fa-chevron-down"} ></i>
    
            </div>
            <hr className="row"/>
            {isExpanded && (
            <div className="row">
                {/* Your expandable content goes here */}              
                <StudentCard onTabChange={onTabChange} regTxt = "0000XXX" nameTxt = "Sample Name" attPer = "00.00" prvGPA = "0.0" attMentoring = "0" lmDate = "dd/mm/yyyy"/>
                <StudentCard onTabChange={onTabChange} regTxt = "0000XXX" nameTxt = "Sample Name" attPer = "00.00" prvGPA = "0.0" attMentoring = "0" lmDate = "dd/mm/yyyy"/>
                <StudentCard onTabChange={onTabChange} regTxt = "0000XXX" nameTxt = "Sample Name" attPer = "00.00" prvGPA = "0.0" attMentoring = "0" lmDate = "dd/mm/yyyy"/>
                <StudentCard onTabChange={onTabChange} regTxt = "0000XXX" nameTxt = "Sample Name" attPer = "00.00" prvGPA = "0.0" attMentoring = "0" lmDate = "dd/mm/yyyy"/>                

            </div>
            )}
        </div>
    );
    
}

export default MenteeClassCardHolder;