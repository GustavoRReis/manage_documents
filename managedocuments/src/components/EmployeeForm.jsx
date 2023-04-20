import React, { useState } from 'react';

export default function EmployeeForm() {
  const initialState = {
    name: '',
    gender: '',
    address: '',
    phone: '',
    profilePicture: '',
    birthdate: '',
    position: '',
    hireDate: '',
    sector: '',
    salary: '',
  };

  const [employeeInfo, setEmployeeInfo] = useState(initialState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeInfo({ ...employeeInfo, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(employeeInfo);
    handleFormReset();
  };

  const handleFormReset = () => {
    setEmployeeInfo(initialState);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input
          type="text"
          name="name"
          value={employeeInfo.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Sexo:
        <select
          name="gender"
          value={employeeInfo.gender}
          onChange={handleInputChange}
        >
          <option value=""></option>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
      </label>
      <br />
      <label>
        Endereço:
        <input
          type="text"
          name="address"
          value={employeeInfo.address}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Telefone:
        <input
          type="text"
          name="phone"
          value={employeeInfo.phone}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Foto de Perfil:
        <input
          type="text"
          name="profilePicture"
          value={employeeInfo.profilePicture}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Data de Nascimento:
        <input
          type="date"
          name="birthdate"
          value={employeeInfo.birthdate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Cargo:
        <input
          type="text"
          name="position"
          value={employeeInfo.position}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Data de Admissão:
        <input
          type="date"
          name="hireDate"
          value={employeeInfo.hireDate}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Setor:
        <input
          type="text"
          name="sector"
          value={employeeInfo.sector}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Salário:
        <input
          type="text"
          name="salary"
          value={employeeInfo.salary}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}
