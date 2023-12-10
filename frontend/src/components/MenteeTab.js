import MenteeClassCardHolder from "./MenteeClassCardHolder";

function MenteeTab(){
    const classArray = ["1BCA-A", "1BCA-B", "3BCA-B", "Name", "Name"];
    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div className="BlankSpace"></div>
            {/* <MenteeClassCardHolder classn="4BCA-B"/> */}
            {classArray.map((item, index) => (
                <MenteeClassCardHolder key={index} classn={item}/>
            ))}
        </div>
    );

}

export default MenteeTab;