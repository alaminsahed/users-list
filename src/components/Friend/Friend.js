import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import "./Friend.css";

const Friend = (props) => {
    const {img,name,email,income} = props.friends;
    console.log(props);
    return (
        <div className="allFriend-container">
        <div className="frnd-img">
           <img src={img} alt=""/>
           
        </div>
        <div className="frnd-info">
            <h2>Name:{name}</h2>
            <h3>Email:{email}</h3>
            <p><small>Yearly Income:{income}</small></p>
            <button onClick={()=>props.handelTotal(props.friends)}> <FontAwesomeIcon icon={faPlus}/>Add
            </button>
            <hr/>
        </div>
      
       
          
        </div>
    );
};

export default Friend;