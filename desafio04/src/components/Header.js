import React from 'react';
import logo from '../assets/facebook-logo.png';

export default function Header() {
  return (
    <div
      style={{
        width: '99%',
        backgroundColor: '#4A90E2',
        padding: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <img style={{ height: 24 }} src={logo} alt="logo"></img>
      <div>
        <h3>Meu perfil</h3>
      </div>
    </div>
  );
}
