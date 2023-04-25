import { Button, TextField } from '@mui/material';
import React from 'react';
import Header from '../../components/Header/Header';
import ListEmployee from '../../components/ListEmployee/ListEmployee';
import './HomePage.css';

export default function HomePage() {
  const DATATESTE = [
    {
      name: 'Joao',
      cargo: 'Vendedor',
      setor: 'Vendas',
      date: 5555,
    },
    {
      name: 'Pedro',
      cargo: 'Gerente',
      setor: 'Vendas',
      date: 5555,
    },
    {
      name: 'Maria',
      cargo: 'Desenvolvedora',
      setor: 'Tecnologia',
      date: 5555,
    },
  ];

  return (
    <div>
      <Header />
      <div className="nav-home">
        <Button variant="contained"> + Novo Cliente</Button>
        <div className="nav-search">
          <TextField
            id="standard-basic"
            label="Pesquisar..."
            variant="standard"
          />
          <Button variant="contained">Pesquisar</Button>
        </div>
      </div>
      <ListEmployee employees={DATATESTE} />
    </div>
  );
}
