import React, { useState } from "react";
import "./User.css";
import fakeData from "../../fakeData/fakedata"
import Friend from "../Friend/Friend";
const User = () => {
    const [friends, setFriends] = useState(fakeData);
    
  return (
    <div className="container">
      <div className="friends-container">
        {friends.map((friends)=>(
            <Friend
            friends = {friends}
            >
           
            </Friend>
        ))}

      </div>
      <div className="summary-container">
            <h2>Total count: </h2>
      
      </div>
    </div>
  );
};

export default User;
