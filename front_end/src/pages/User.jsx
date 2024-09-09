// src/pages/User.jsx
import React, { useState } from 'react';
import InformationAccount from '../components/InformationAccount';
import EditProfileForm from '../components/EditProfileForm';
import '../styles/Pages/User.css'


export default function User() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <main className="bg-dark">
      <h1 className='UserH1'>
        Welcome back
        <br />
        {`${user.firstName} ${user.lastName}!`}
      </h1>

      <button className= 'edit-button' onClick={handleEditClick}>Edit Name</button>
      {isEditing && (
        <EditProfileForm
          user={user}
          onSave={handleSave}
          onCancel={handleCancel}
        />
      )}

      <p className="sr-only">Accounts</p>
      <InformationAccount
        title="Argent Bank Checking (x8349)"
        amount="$2,082.79"
        description="Available Balance"
      />
      <InformationAccount
        title="Argent Bank Savings (x6712)"
        amount="$10,928.42"
        description="Available Balance"
      />
      <InformationAccount
        title="Argent Bank Credit Card (x8349)"
        amount="$184.30"
        description="Current Balance"
      />
    </main>
  );
}
