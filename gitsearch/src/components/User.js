import React from 'react';
import { useNavigate } from 'react-router-dom';

const User = ({ imageURL, name }) => {
  let navigate = useNavigate();
  return (
    <div className="result">
      <div className="card">
        <img src={imageURL} alt="" />
        <h3>{name}</h3>
        <button onClick={()=>navigate("/user")}>profile</button>
      </div>
    </div>
  );
};

export default User;
