import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DeviceComponent = ({ role }) => {
  const [devices, setDevices] = useState([]);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        let response;
        if (role === 'lev_engineer') {
          response = await axios.get('/api/devices/engineerDevices');
        } else if (role === 'owner') {
          response = await axios.get('/api/devices/allDevices');
        }
        setDevices(response.data);
      } catch (error) {
        console.error('Error fetching devices', error);
      }
    };

    fetchDevices();
  }, [role]);

  return (
    <div className="device-container">
      <h2>Devices</h2>
      <ul>
        {devices.map((device) => (
          <li key={device.id}>
            <h3>{device?.name}</h3>
            <p>Description: {device?.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DeviceComponent;
