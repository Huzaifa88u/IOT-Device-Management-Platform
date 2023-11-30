import React, { useState } from 'react';
import './ProfileComponent.css';
// import DeviceComponent from './DeviceComponent';
import { Link } from 'react-router-dom'

const Profile = ({ role }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const roleInfo = {
    lev_operator: {
      title: 'LEV Operator',
      info: 'This is information for LEV Operators.',
    },
    lev_engineer: {
      title: 'LEV Engineer',
      info: 'This is information for LEV Engineers.',
    },
    lev_manager: {
      title: 'LEV Manager',
      info: 'This is information for LEV Managers.',
    },
    owner: {
      title: 'Owner',
      info: 'This is information for Owners.',
    },
  };

  const [activeTab, setActiveTab] = useState('display'); 

  const { title, info } = roleInfo[role.toLowerCase()] || { title: '', info: '' };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="profile-container">
      <h4 className='app-name'>IOT_Device_Management_platform</h4>
      <header className="profile-header">
        <h2>{title}</h2>
        <p>Role: {role}</p>
      </header>
      <div className="profile-tabs">
        <button
          className={activeTab === 'display' ? 'active' : ''}
          onClick={() => handleTabChange('display')}
        >
          Display Information
        </button>
        <button
          className={activeTab === 'editable' ? 'active' : ''}
          onClick={() => handleTabChange('editable')}
        >
          Editable Information
        </button>
        <button>
          <Link className="link-style" to='/profile/devices'>Devices</Link>
        </button>
      </div>
      <section className="profile-info">
        {activeTab === 'display' ? (
          <>
            <h3 className='sub-header'>Information</h3>
            <p>{info}</p>
          </>
        ) : (
          <>
            <h3 className='sub-header'>Edit Information</h3>
            <form className='fields'>
              <label>Name:</label>
              <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
              <label>Email:</label>
              <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <label>Password:</label>
              <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

              <div className='button-style'>
              <button type="submit">Save</button>
              </div>
            </form>
          </>
        )}
      </section>
      {/* <Route path='/profile/devices' element={<DeviceComponent role={role}/>}/> */}
    </div>
  );
};

export default Profile;