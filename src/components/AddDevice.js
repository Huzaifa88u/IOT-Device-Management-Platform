import React, { useState, useEffect } from 'react';
import './DeviceComponent.css'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URLs from '../common';

const AddDevice = ({ isEdit, isUpdate, id, name: initialName, description: initialDescription }) => {
  const [deviceName, setDeviceName] = useState('');
  const [deviceDescription, setDeviceDescription] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isEdit,isUpdate,initialName)
    if (isEdit) {
      setDeviceName(initialName);
      setDeviceDescription(initialDescription);
    }
  }, [isEdit, initialName, initialDescription]);

  const handleAddDevice = async () => {
    try {
      const response = await axios.post(`${API_URLs.SERVER_URL}/api/device/new`, { name: deviceName, description: deviceDescription });
      console.log(response);
      navigate('/profile/devices');
    } catch (error) {
      console.error('Failed to add device', error);
    }
  };

  const handleEditDevice = async () => {
    try {
      const response = await axios.patch(`${API_URLs.SERVER_URL}/api/device/${id}`, { id, name: deviceName, description: deviceDescription });
      console.log(response);
      navigate('/profile/devices');
    } catch (error){
      console.error('Failed to edit device', error);
    }
  };

  const handleUpdateDevice = async () => {
    try {
      const response = await axios.put(`${API_URLs.SERVER_URL}/api/device/${id}`, { id, name: deviceName, description: deviceDescription });
      console.log(response);
      navigate('/profile/devices');
    } catch (error){
      console.error('Failed to update device', error);
    }
  };

  return (
    <div className="login-container">
      <h4 className='appname'>IOT Device Management platform</h4>
      <h2 className='login-header'>{isEdit ? 'Edit Device' : 'Add Device'}</h2>
      <form className="login-form">
        <input type="text" placeholder="Name" value={deviceName} onChange={(e) => setDeviceName(e.target.value)} />
        <input type="text" placeholder="Description" value={deviceDescription} onChange={(e) => setDeviceDescription(e.target.value)} />
        <div className='button-style'>
          {(!isEdit && !isUpdate) && <button onClick={handleAddDevice}>Add Device</button>}
          {(!isEdit && isUpdate) && <button onClick={handleUpdateDevice}>Update Device</button>}
          {(isEdit && !isUpdate) && <button onClick={handleEditDevice}>Edit Device</button>}
        </div>
      </form>
    </div>
  );
};

export default AddDevice;
