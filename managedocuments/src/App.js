import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import EmployeeForm from './components/EmployeeForm/EmployeeForm'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/employee" component={EmployeeForm} />
      </Switch>
    </BrowserRouter>
  );
}
