/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profile.css';

export default function Profile() {
    const [userData, setUserData] = useState(null);
    const [editMode, setEditMode] = useState(false); // State to track whether edit mode is active
    const [editedField, setEditedField] = useState(''); // State to track which field is being edited
    const [editedValue, setEditedValue] = useState(''); // State to track the edited value

    useEffect(() => {
        fetchUserData();
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get('/api/user/profile');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
        }
    };

    const handleDeleteAccount = async () => {
        try {
            await axios.delete('/api/user/delete');
        } catch (error) {
            console.error('Error deleting user account:', error);
        }
    };

    const handleEdit = (field) => {
        setEditMode(true); // Activate edit mode
        setEditedField(field); // Set the field being edited
        setEditedValue(userData[field]); // Set the initial edited value to the current value
    };

    const handleSave = async () => {
        try {
            await axios.put(`/api/user/${userData.id}`, { [editedField]: editedValue });
            console.log('Edited field:', editedField);
            console.log('Edited value:', editedValue);
            setUserData(prevUserData => ({ ...prevUserData, [editedField]: editedValue }));
            setEditMode(false);
            setEditedField('');
            setEditedValue('');
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    };
    

    const handleCancel = () => {
        // Cancel editing and revert to view mode
        setEditMode(false);
        setEditedField('');
        setEditedValue('');
    };

    const handleChange = (event) => {
        setEditedValue(event.target.value); // Update the edited value as the user types
    };

    return (
        <div>
            <h1>Profile</h1>
            <img src="./profile.png" alt="Profile Image" style={{ width: '150px', height: '150px' }} />
            {userData && (
                <div>
                    <p>{userData.name}</p>
                    <div className="profile-info">
                        <div className="profile-field">
                            <p>ID:</p>
                            <p>{userData.id}</p>
                        </div>


                        <div className="profile-field">
                            <p>Name:</p>
                            {editMode && editedField === 'name' ? (
                                <input type="text" value={editedValue} onChange={handleChange} />
                            ) : (
                                <p>{userData.name}</p>
                            )}
                            {editMode && editedField === 'name' && (
                                <button onClick={handleSave}>Save</button>
                            )}
                            {(!editMode || editedField !== 'name') && (
                                <img src="./edit.png" alt="Edit" onClick={() => handleEdit('name')} />
                            )}
                        </div>


                        <div className="profile-field">
                            <p>Contact:</p>
                            {editMode && editedField === 'contact' ? (
                                <input type="text" value={editedValue} onChange={handleChange} />
                            ) : (
                                <p>{userData.contact}</p>
                            )}
                            {editMode && editedField === 'contact' && (
                                <button onClick={handleSave}>Save</button>
                            )}
                            {(!editMode || editedField !== 'contact') && (
                                <img src="./edit.png" alt="Edit" onClick={() => handleEdit('contact')} />
                            )}
                        </div>


                        <div className="profile-field">
                            <p>Location:</p>
                            {editMode && editedField === 'location' ? (
                                <input type="text" value={editedValue} onChange={handleChange} />
                            ) : (
                                <p>{userData.location}</p>
                            )}
                            {editMode && editedField === 'location' && (
                                <button onClick={handleSave}>Save</button>
                            )}
                            {(!editMode || editedField !== 'location') && (
                                <img src="./edit.png" alt="Edit" onClick={() => handleEdit('location')} />
                            )}
                        </div>


                        <div className="profile-field">
                            <p>Description:</p>
                            {editMode && editedField === 'description' ? (
                                <input type="text" value={editedValue} onChange={handleChange} />
                            ) : (
                                <p>{userData.description}</p>
                            )}
                            {editMode && editedField === 'description' && (
                                <button onClick={handleSave}>Save</button>
                            )}
                            {(!editMode || editedField !== 'description') && (
                                <img src="./edit.png" alt="Edit" onClick={() => handleEdit('description')} />
                            )}
                        </div>

                        
                        <div className="profile-field">
                            <p>Email:</p>
                            {editMode && editedField === 'email' ? (
                                <input type="text" value={editedValue} onChange={handleChange} />
                            ) : (
                                <p>{userData.email}</p>
                            )}
                            {editMode && editedField === 'email' && (
                                <button onClick={handleSave}>Save</button>
                            )}
                            {(!editMode || editedField !== 'email') && (
                                <img src="./edit.png" alt="Edit" onClick={() => handleEdit('email')} />
                            )}
                        </div>
                    </div>
                    <br></br><br></br>
                    <button onClick={handleDeleteAccount}>Delete your account</button>
                    <br></br><br></br><br></br>
                </div>
            )}
        </div>
    );
}
*/