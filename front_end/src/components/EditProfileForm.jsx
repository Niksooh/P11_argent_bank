import React, { useState } from 'react';
import '../styles/Components/EditProfileForm.css';

function EditProfileForm({ user, onSave, onCancel }) {

  const [userName, setUserName] = useState(user.userName || '');

  const handleSave = (e) => {
    e.preventDefault();
    onSave({ firstName : user.firstName, lastName : user.lastName, userName });
  };

  return (
    <div className="edit-profile-form">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSave}>
        <div className="input-wrapper">
          <label htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            readOnly
            type="text"
            id="firstName"
            value={user.firstName}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            readOnly
            type="text"
            id="lastName"
            value={user.lastName}
          />
        </div>
        <div className="form-buttons">
          <button className="edit-button-form" type="submit">Save</button>
          <button className="edit-button-form" type="button" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditProfileForm;
