import React, { Component } from 'react';

function Contact({ user, key, onClick }) {
  return(
    <div onClick={() => onClick(user.id)} >
      <div style={{ border: '1px solid #ccc', margin: '10px', padding: '5px'}}>
        <p>Name: {user.name}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
      </div>
    </div>
  );
}

export default Contact;
