import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeviceComponent.css';
import { Link, useNavigate } from 'react-router-dom';
import API_URLs from '../common';
import DeviceDetails from './DeviceDetails'; 


const DeviceComponent = () => {
  const [devices, setDevices] = useState([]);
  const role = 'owner';
  const [selectedDevice, setSelectedDevice] = useState(null);
  const [isEdit,setIsEdit] = useState(false);
  const [isUpdate,setIsUpdate] = useState(false);
  const [editDevice, setEditDevice] = useState(null);
  const navigate = useNavigate();

  const dummyDevices = [
    { id: 1, name: 'Device 1', description: 'This is device 1 This is device 1 This is device 1 This is device 1 This is device 1 This is device 1 This is device 1 This is device 1 This is device 1 This is device 1' },
    { id: 2, name: 'Device 2', description: 'This is device 2' },
    { id: 3, name: 'Device 1', description: 'This is device 1' },
    { id: 4, name: 'Device 1', description: 'This is device 1' },
    { id: 5, name: 'Device 1', description: 'This is device 1' },
    { id: 6, name: 'Device 1', description: 'This is device 1' },
    { id: 7, name: 'Device 1', description: 'This is device 1' },
    { id: 8, name: 'Device 1', description: 'This is device 1' },
    { id: 9, name: 'Device 1', description: 'This is device 1' },
    { id: 10, name: 'Device 1', description: 'This is device 1' },
    { id: 11, name: 'Device 1', description: 'This is device 1' },
    { id: 12, name: 'Device 1', description: 'This is device 1' },
    { id: 13, name: 'Device 1', description: 'This is device 1' },

    // Add your remaining dummy devices here...
  ];
  const handleRowClick = (device) => {
    console.log("in")
    setSelectedDevice(device); 
  };

  const handleCloseModal = () => {
    setSelectedDevice(null); 
  };

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = axios.get(`${API_URLs.SERVER_URL}/api/device/devices_list/`)
        // setDevices(response)
        // Simulating API call delay with setTimeout
        setTimeout(() => {
          setDevices(dummyDevices);
        }, 1000);
      } catch (error) {
        console.error('Error fetching devices', error);
      }
    };

    fetchDevices();
  }, [role]);

  const handleEdit = (deviceId, name, description) => {
    navigate(`/profile/devices/edit/${deviceId}`, {
      state: {
        isEdit: true,
        id: deviceId,
        name,
        description
      }
    });
  };
  

  const handleUpdate = (deviceId, name, description) => {
    setIsEdit(true);
    setIsUpdate(true); 
    setEditDevice({ id: deviceId, name, description });
    console.log(`Updating device with ID: ${deviceId}`);
  };

  const handleDelete = (deviceId) => {
    const response = axios.delete(`${API_URLs.SERVER_URL}/api/device/device/${deviceId}`)
    console.log(`Deleted device: ${response}`);
  };

  const isAdmin = role === 'owner' || role === 'hiring_manager';

  return (
    <>
      {selectedDevice && (
        <DeviceDetails device={selectedDevice} onClose={handleCloseModal} />
      )}
    <div className="device-container">
      <h2 className='login-header'>Devices</h2>
      {isAdmin && (
        <button className="action-button add-button"><Link to = '/profile/devices/new' style={{textDecoration: 'none', color: 'black'}}>Add New Device</Link></button>
      )}
      <div className="table-container">
        <table className="device-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              {isAdmin && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {devices.map((device) => (
              <tr key={device.id} onClick={()=>handleRowClick(device)}>
                <td>{device.id}</td>
                <td>{device.name}</td>
                <td>{device.description}</td>
                {isAdmin && (
                  <td>
                    <button onClick={() => handleEdit(device.id,device.name,device.description)}>Edit</button>
                    <button onClick={() => handleUpdate(device.id,device.name,device.description)}>Update</button>
                    <button onClick={() => handleDelete(device.id)}>Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
    </div>
    </>

  );
};

export default DeviceComponent;
