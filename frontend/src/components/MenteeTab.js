import MenteeClassCardHolder from "./MenteeClassCardHolder";

function MenteeTab({onTabChange}){
    const classArray = ["1BCA-A", "1BCA-B","4BCA-B","2MDS"];
    return(
        <div className="col main">
            {/* <!-- Main content goes here --> */}
            <div className="BlankSpace"></div>
            {/* <MenteeClassCardHolder classn="4BCA-B"/> */}
            {classArray.map((item, index) => (
                <MenteeClassCardHolder onTabChange={onTabChange} key={index} classn={item}/>
            ))}
        </div>
    );

}

export default MenteeTab;