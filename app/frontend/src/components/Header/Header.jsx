import { Button } from '@mui/material';
import React from 'react';
import logoTaugor from '../../images/logo-taugor.png';
import './Header.css';

export default function Header({logout, toHome}) {
  return (
    <div className="header-app">
      <img alt="logo-taugor" src={logoTaugor} />

      <div>
        <Button onClick={toHome} variant="contained">Home</Button>
        <Button onClick={logout} variant="contained">Logout</Button>
      </div>
    </div>
  );
}
