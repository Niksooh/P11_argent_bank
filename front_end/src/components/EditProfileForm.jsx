import React, { useState } from 'react';
import '../styles/Components/EditProfileForm.css';

function EditProfileForm({ user, onSave, onCancel }) {
  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');

  const handleSave = (e) => {
    e.preventDefault();
    onSave({ firstName, lastName });
  };

  return (
    <div className="edit-profile-form">
      <h2>Edit Profile</h2>
      <form onSubmit={handleSave}>
        <div className="input-wrapper">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
