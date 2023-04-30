import React from 'react';
import './CardPdf.css';

export default function CardPdf({ employeeInfo }) {
  return (
    <div className="box-card-pdf">
      <div className="pic-profile">
        <img src={employeeInfo.profilePicture} alt="profile-pic" />
      </div>
      <div className="data-profile">
        <div>
          <p>{`Nome: ${employeeInfo.name}`}</p>
          <p>{`Sexo: ${employeeInfo.gender}`}</p>
          <p>{`Endereço: ${employeeInfo.address}`}</p>
          <p>{`Telefone: ${employeeInfo.phone}`}</p>
          <p>{`Data de nascimento: ${employeeInfo.birthdate}`}</p>
        </div>
        <div>
          <p>{`Data de admissão: ${employeeInfo.hireDate}`}</p>
          <p>{`Cargo: ${employeeInfo.position}`}</p>
          <p>{`Setor: ${employeeInfo.sector}`}</p>
          <p>{`Salário: ${employeeInfo.salary}`}</p>
          <p>{`Situação: ${employeeInfo.situation}`}</p>
        </div>
      </div>
    </div>
  );
}
