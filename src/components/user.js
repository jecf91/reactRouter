import React from 'react';


function User (params) {
  //console.log(params)
  let { userName, history } = params;

  return (
    <div>
      <h3>User: {userName}</h3>
      <button onClick={() => history.push('/')}>Home</button>
    </div>
  );
}

export default User;