import React, { Component } from "react";
import axios from "axios";

export default class OficialForm extends Component {
  constructor() {
    super();
    this.state = {
      nomeOficial: "",
      chapa: "",
      funcional: "",
      nomeUsuario: "",
      senha: "",
      ativo: true,
      lista: [],
    };
    this.buscaOficiais();
  }

  buscaOficiais() {
    axios
      .get(`http://localhost:3003/api/oficiais?sort=-criadoEm`)
      .then((resp) => this.setState({ lista: resp.data }));
  }

  remover(oficial) {
    axios
      .delete(`http://localhost:3003/api/oficiais/${oficial._id}`)
      .then((resp) => this.buscaOficiais());
  }

  marcaComoAtivo(oficial) {
    axios
      .put(`http://localhost:3003/api/oficiais/${oficial._id}`, {
        ...oficial,
        ativo: true,
      })
      .then((resp) => this.buscaOficiais());
  }

  marcaComoInativo(oficial) {
    axios
      .put(`http://localhost:3003/api/oficiais/${oficial._id}`, {
        ...oficial,
        ativo: false,
      })
      .then((resp) => this.buscaOficiais());
  }

  criaLinhasTabela() {
    return this.state.lista.map((cadaOficial) => (
      <tr key={cadaOficial._id}>
        <td>{cadaOficial.nomeOficial}</td>
        <td>{cadaOficial.chapa}</td>
        <td>{cadaOficial.funcional}</td>
        <td>{cadaOficial.nomeUsuario}</td>
        <td>{cadaOficial.senha}</td>
        <td>
          <button
            onClick={(e) => this.remover(cadaOficial)}
            type="button"
            className="btn btn-danger"
          >
            Remover
          </button>
          <button
            style={!cadaOficial.ativo ? { display: "none" } : null}
            onClick={(e) => this.marcaComoInativo(cadaOficial)}
            type="button"
            className="btn btn-success"
          >
            Ativo
          </button>
          <button
            style={cadaOficial.ativo ? { display: "none" } : null}
            onClick={(e) => this.marcaComoAtivo(cadaOficial)}
            type="button"
            className="btn btn-warning"
          >
            Inativo
          </button>
        </td>
      </tr>
    ));
  }

  setNomeOficial(e) {
    this.setState({
      nomeOficial: e.target.value,
    });
  }
  setChapa(e) {
    this.setState({
      chapa: e.target.value,
    });
  }
  setFuncional(e) {
    this.setState({
      funcional: e.target.value,
    });
  }
  setNomeUsuario(e) {
    this.setState({
      nomeUsuario: e.target.value,
    });
  }
  setSenha(e) {
    this.setState({
      senha: e.target.value,
    });
  }

  cadastrar() {
    const newOficial = {
      nomeOficial: this.state.nomeOficial,
      chapa: this.state.chapa,
      funcional: this.state.funcional,
      nomeUsuario: this.state.nomeUsuario,
      senha: this.state.senha,
      ativo: this.state.ativo,
    };

    axios
      .post(`http://localhost:3003/api/oficiais`, newOficial)
      .then((resposta) => {
        console.log(`Funcionou ${resposta.data}`);
        this.buscaOficiais();
      });
  }

  render() {
    return (
      <div className="form">
        <div className="form-group">
          <label htmlFor="nomeOficial"> Nome do Oficial </label>
          <input
            className="form-control"
            type="text"
            id="nomeOficial"
            onChange={(e) => this.setNomeOficial(e)}
            value={this.state.nomeOficial}
          />
        </div>
        <div className="form-group">
          <label htmlFor="chapa"> Chapa </label>
          <input
            className="form-control"
            type="number"
            id="chapa"
            onChange={(e) => this.setChapa(e)}
            value={this.state.chapa}
          />
        </div>
        <div className="form-group">
          <label htmlFor="funcional"> Funcional </label>
          <input
            className="form-control"
            type="number"
            id="funcional"
            onChange={(e) => this.setFuncional(e)}
            value={this.state.funcional}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomeUsuario"> Nome do Usuario </label>
          <input
            className="form-control"
            type="text"
            id="nomeUsuario"
            onChange={(e) => this.setNomeUsuario(e)}
            value={this.state.nomeUsuario}
          />
        </div>
        <div className="form-group">
          <label htmlFor="senha"> Senha </label>
          <input
            className="form-control"
            type="password"
            id="senha"
            onChange={(e) => this.setSenha(e)}
            value={this.state.senha}
          />
        </div>

        <div className="form-group">
          <button
            className="btn btn-primary"
            type="button"
            onClick={(e) => this.cadastrar()}
          >
            Cadastra
          </button>
        </div>

        <div className="container">
          Lista de Oficiais
          <table className="table">
            <thead>
              <tr>
                <th>Nome do Oficial</th>
                <th>Chapa</th>
                <th>Funcional</th>
                <th>Nome do Usuário</th>
                <th>Senha</th>
              </tr>
            </thead>
            <tbody>{this.criaLinhasTabela()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
