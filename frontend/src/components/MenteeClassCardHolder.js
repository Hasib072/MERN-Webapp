import React, { useState } from 'react';
import MenteeCard from "./MenteeCard";
function MenteeClassCardHolder(props) {

    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const class_name = props.classn;

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
                <MenteeCard/>              
                <MenteeCard/>              
                <MenteeCard/>              
                <MenteeCard/>
                <MenteeCard/>
                <MenteeCard/>
                <MenteeCard/>
                <MenteeCard/>
                <MenteeCard/>

            </div>
            )}
            
        </div>
    );
    
}

export default MenteeClassCardHolder;