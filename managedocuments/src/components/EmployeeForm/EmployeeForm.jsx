import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './EmployeeForm.css';
import { Redirect } from 'react-router-dom';

export default function EmployeeForm({ handleSubmit, handleInputChange, employeeInfo, shouldRedirect }) {
  return (
    <div>
      {shouldRedirect && <Redirect to="/home" />}
      <Box
        className="box-form"
        component="form"
        sx={{
          backgroundColor: '#F2F2F2',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px',
          width: '500px',
          margin: 'auto',
          height: '100hv',
        }}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ mb: 2, width: '100%' }}
          id="name"
          label="Nome"
          name="name"
          value={employeeInfo.name}
          onChange={handleInputChange}
        />
        <TextField
          id="gender"
          select
          label="Sexo"
          name="gender"
          value={employeeInfo.gender}
          onChange={handleInputChange}
          SelectProps={{
            native: true,
          }}
        >
          <option value=""></option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </TextField>
        <TextField
          id="address"
          label="Endereço"
          name="address"
          value={employeeInfo.address}
          onChange={handleInputChange}
        />
        <TextField
          id="phone"
          label="Telefone"
          name="phone"
          value={employeeInfo.phone}
          onChange={handleInputChange}
        />
        <TextField
          id="profilePicture"
          label="Foto de Perfil"
          name="profilePicture"
          value={employeeInfo.profilePicture}
          onChange={handleInputChange}
        />
        <TextField
          id="birthdate"
          label="Data de Nascimento"
          name="birthdate"
          type="date"
          value={employeeInfo.birthdate}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="position"
          label="Cargo"
          name="position"
          value={employeeInfo.position}
          onChange={handleInputChange}
        />
        <TextField
          id="hireDate"
          label="Data de Admissão"
          name="hireDate"
          type="date"
          value={employeeInfo.hireDate}
          onChange={handleInputChange}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="sector"
          label="Setor"
          name="sector"
          value={employeeInfo.sector}
          onChange={handleInputChange}
        />
        <TextField
          id="salary"
          label="Salário"
          name="salary"
          value={employeeInfo.salary}
          onChange={handleInputChange}
        />
        <Button
          onClick={(e) => handleSubmit(e)}
          sx={{
            borderRadius: '16px',
            width: '150px',
            margin: 'auto',
          }}
          type="submit"
          variant="contained"
        >
          Enviar
        </Button>
      </Box>
    </div>
  );
}
