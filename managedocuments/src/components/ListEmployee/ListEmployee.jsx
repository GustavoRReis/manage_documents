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
            <tr key={index.Nome}>
              <th>{index.Nome}</th>
              <th>{index.Cargo}</th>
              <th>{index.Setor}</th>
              <th>{index.DataDeAdmissao.replace(/(\d{2})(\d{2})(\d{4})/, '$1/$2/$3')}</th>
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
