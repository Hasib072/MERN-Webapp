function RecentMentee(props) {
    return(
        <div className='row RecentBox'>
            
                    <div className="circular-profile-image2">
                        <img src="https://via.placeholder.com/95" alt="Profile" />
                    </div>
            
            <div className="row TopHeadline">
                <p className="THeadtxtName"> FirstName LastName &emsp;</p>
                <p className="THeadtxtRegno"> Register.no: 2XXXXXX &emsp;</p>
                <p className="THeadtxtClass"> Class: XXXX-X </p>
            </div>
            <div className="row discContainer">
                <p className="disctxt">This is a two line description of the sample design.<br/>This is line two</p>
            </div>
        </div>
    );
}

export default RecentMentee;