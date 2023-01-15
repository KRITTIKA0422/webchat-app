import React from 'react';

export default function ChatBar(){
  
  return (
    <div className="chat__sidebar">
      <h2>Webchat App</h2>
      <div>
        <h4 className="chat__header">ACTIVE USERS</h4>
        <div className="chat__users">
            <p className='chat_active'>{localStorage.getItem("username")}</p>
        </div>
      </div>
    </div>
  );
};
