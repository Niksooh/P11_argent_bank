import React, { useState } from 'react';
import InformationAccount from '../components/InformationAccount';
import EditProfileForm from '../components/EditProfileForm';
import '../styles/Pages/User.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../reducers/userReducer';



export default function User() {
    const dispatch = useDispatch();
  const userData = useSelector(state => state.user)
  const [user, setUser] = useState({
    userName: userData.userName,
    firstName: userData.firstName,
    lastName: userData.lastName,
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = (updatedUser) => {
    setUser(updatedUser);
    console.log(user)
    fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${userData.token}`,
            body: JSON.stringify({ userName : updatedUser.userName})
        }
    })
    .then(response => { console.log(response)
        if (!response.ok) {
            throw new Error('HTTP error while updating profile');
        }
        dispatch(updateProfile( {userName : updatedUser.userName} ));
    })

    .catch(error => {
        console.error('Error updating user data:', error.message);
    });
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
