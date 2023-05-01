import { FilePdf, FileText, NotePencil, Trash } from 'phosphor-react';
import React from 'react';
import { Link } from 'react-router-dom';
import './ListEmployee.css';

export default function ListEmployee({
  employees,
  deleteUser,
  handleClickPdf,
  handleClickDataPdf,
}) {
  return (
    <table className="table-home">
      <thead>
        <tr>
          <td>Nome</td>
          <td>Cargo</td>
          <td>Setor</td>
          <td>Situação</td>
          <td>Data de admissão</td>
          <td>Histórico</td>
          <td>Relatório</td>
          <td></td>
        </tr>
      </thead>

      <tbody className="body-home">
        {employees.map((index) => {
          return (
            <tr key={index.id}>
              <th>{index.name}</th>
              <th>{index.position}</th>
              <th>{index.sector}</th>
              <th>{index.situation}</th>
              <th>{index.hireDate.split('-').reverse().join('-')}</th>
              <th>
                <button onClick={() => handleClickDataPdf(index.name)}>
                  <FileText size={32} />
                </button>
              </th>
              <th>
                <button onClick={() => handleClickPdf(index.id)}>
                  <FilePdf size={32} />
                </button>
              </th>
              <th>
                <Link to={`/home/edit/${index.id}`}>
                  <NotePencil size={32} color={'blue'} />
                </Link>
                <button onClick={(e) => deleteUser(index.id)}>
                  <Trash size={32} color={'red'} />
                </button>
              </th>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
