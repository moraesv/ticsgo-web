import React, { Component } from "react";

export default class Menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse bg-inverse">
        <div className="container">
          <div className="navbar-header">
            <a className="nav-bar-brand" href="/tarefas">
              <i className="fa fa-calendar-check-o"></i> TIC
            </a>
          </div>

          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li>
                <a href="/tarefas"> Tarefas </a>
              </li>
              <li>
                <a href="/endereco"> Endereços </a>
              </li>
              <li>
                <a href="/atendimento"> Atendimentos </a>
              </li>
              <li>
                <a href="/oficial"> Oficial </a>
              </li>
              <li>
                <a href="/about"> Sobre </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
