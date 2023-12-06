import MenteeClassCardHolder from "./MenteeClassCardHolder";

function MenteeTab(){

    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div className="BlankSpace"></div>
            <MenteeClassCardHolder classn="4BCA-B"/>
            <MenteeClassCardHolder classn="2BCA-B"/>

        </div>
    );

}

export default MenteeTab;