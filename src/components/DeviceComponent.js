import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DeviceComponent.css'

const DeviceComponent = ({ role }) => {
  const [devices, setDevices] = useState([]);
  const dummyDevices = [
    { id: 1, name: 'Device 1', description: 'This is device 1' },
    { id: 2, name: 'Device 2', description: 'This is device 2' },
    { id: 3, name: 'Device 3', description: 'This is device 3' },
    { id: 4, name: 'Device 4', description: 'This is device 4' },
    { id: 5, name: 'Device 5', description: 'This is device 5' },
    { id: 6, name: 'Device 6', description: 'This is device 6' },
    { id: 7, name: 'Device 7', description: 'This is device 7' },
    { id: 8, name: 'Device 8', description: 'This is device 8' },

  ];
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        // let response;
        // if (role === 'lev_engineer') {
        //   response = await axios.get('/api/devices/engineerDevices');
        // } else if (role === 'owner') {
        //   response = await axios.get('/api/devices/allDevices');
        // }
        setTimeout(() => {
          setDevices(dummyDevices);
        }, 1000);
      } catch (error) {
        console.error('Error fetching devices', error);
      }
    };

    fetchDevices();
  }, [role]);

  return (
    <div className="device-container">
      <h2 className='login-header'>Devices</h2>
      <div className="card-container">
        {devices.map((device) => (
          <div key={device.id} className="card">
            <h3>{device?.name}</h3>
            <p>Description: {device?.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeviceComponent;
