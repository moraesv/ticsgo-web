import React from "react";
import { Router, Route, Redirect, Switch } from "react-router-dom";

import Tarefa from "../Tarefa";
import Endereco from "../Endereco";
import Atendimento from "../Atendimento";
import Oficial from "../Oficial";
import About from "../About";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default (props) => (
  <Router history={history}>
    <Switch>
      <Route path="/tarefas" component={Tarefa} />
      <Route path="/endereco" component={Endereco} />
      <Route path="/atendimento" component={Atendimento} />
      <Route path="/oficial" component={Oficial} />
      <Route path="/about" component={About} />
      <Redirect from="*" to="/tarefas" />
    </Switch>
  </Router>
);
