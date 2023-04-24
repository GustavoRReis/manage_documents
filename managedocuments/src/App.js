import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
