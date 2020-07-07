import React, { useState } from "react";
import "./User.css";
import fakeData from "../../fakeData/fakedata"
import Friend from "../Friend/Friend";
import Summary from "../Summary/Summary";
const User = () => {
    const [friends, setFriends] = useState(fakeData);
    
    const [add, setAdd] = useState([]);
    const handelTotal = (friends) =>{
      const newAdd = [...add,friends];
      setAdd(newAdd);
    }
  return (
    <div className="container">
      <div className="friends-container">
        {friends.map((friends)=>(
            <Friend
            friends = {friends}
            handelTotal = {handelTotal}
            >
           
            </Friend>
        ))}

      </div>
      <div className="summary-container">
           <Summary add={add}></Summary>
      </div>
    </div>
  );
};

export default User;
