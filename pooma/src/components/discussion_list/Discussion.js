import React from 'react';
import './Discussion.css'
const Discussion = props => (
    <div className="discussionBlock">
        <div className="arrows">
            <p>1234</p>
            <img src="https://image.freepik.com/free-icon/arrow-bold-up-ios-7-interface-symbol_318-35530.jpg" />
            <img src="https://image.freepik.com/free-icon/arrow-bold-down-ios-7-interface-symbol_318-34310.jpg" />
            <p>432</p>
        </div>
        <div className="avatar">
            <img src={"https://cdn2.iconfinder.com/data/icons/website-icons/512/User_Avatar-512.png"} alt="user avatar" />
        </div>
        <div className="textContent">
            <h3>{props.title}</h3>
            <small>10:58am</small>
            <p>I am a discussion post body. Look at all the text I contain. So many words. Woah. </p>
        </div>
    </div>  
)

export default Discussion