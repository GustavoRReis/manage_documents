import React from 'react';
import './ListEmployee.css';

export default function ListEmployee({ employees }) {
  return (
    <table className="table-home">
      <thead>
        <tr>
          <td>Nome</td>
          <td>Cargo</td>
          <td>Setor</td>
          <td>Data de admissão</td>
          <td>Relatório</td>
          <td>Editar</td>
        </tr>
      </thead>

      <tbody className="body-home">
        {employees.map((index) => {
          return (
            <tr key={index.name}>
              <th>{index.name}</th>
              <th>{index.cargo}</th>
              <th>{index.setor}</th>
              <th>{index.date}</th>
              <th>
                <button>Gerar PDF </button>
              </th>
              <th>
                <button>Editar</button>
                <button>Excluir</button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
