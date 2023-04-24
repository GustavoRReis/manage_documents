import { Box, Button, TextField } from '@mui/material';
import React from 'react'
import logoTaugor from '../../images/logo-taugor.png';

export default function Register() {
  return (
    <div className="page-login">
      <Box component="form" className="box-login">
        <img src={logoTaugor} alt="logo-taugor"></img>
        <TextField id="email-login" label="Email" type="email" />
        <TextField id="password-login" label="Password" type="password" />
        <Button variant="contained">Register</Button>
        <p> © Desenvolvido por Gustavo Reis</p>
      </Box>
    </div>
  );
}
