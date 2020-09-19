import React, { Component } from "react";
import axios from "axios";

export default class EnderecoForm extends Component {
  constructor() {
    super();
    this.state = {
      cep: "",
      estado: "",
      cidade: "",
      bairro: "",
      logradouro: "",
      endereco: "",
      numero: "",
      complemento: "",
      referencia: "",
      ativo: true,
      lista: [],
    };
    this.buscaEnderecos();
  }
  buscaEnderecos() {
    axios
      .get(`http://localhost:3003/api/enderecos?sort=-criadoEm`)
      .then((resp) => this.setState({ lista: resp.data }));
  }

  remover(endereco) {
    axios
      .delete(`http://localhost:3003/api/enderecos/${endereco._id}`)
      .then((resp) => this.buscaEnderecos());
  }

  marcaComoAtivo(endereco) {
    axios
      .put(`http://localhost:3003/api/enderecos/${endereco._id}`, {
        ...endereco,
        ativo: true,
      })
      .then((resp) => this.buscaEnderecos());
  }

  marcaComoInativo(endereco) {
    axios
      .put(`http://localhost:3003/api/enderecos/${endereco._id}`, {
        ...endereco,
        ativo: false,
      })
      .then((resp) => this.buscaEnderecos());
  }

  criaLinhasTabela() {
    return this.state.lista.map((cadaEndereco) => (
      <tr key={cadaEndereco._id}>
        <td>{cadaEndereco.cep}</td>
        <td>{cadaEndereco.estado}</td>
        <td>{cadaEndereco.cidade}</td>
        <td>{cadaEndereco.bairro}</td>
        <td>{cadaEndereco.logradouro}</td>
        <td>{cadaEndereco.endereco}</td>
        <td>{cadaEndereco.numero}</td>
        <td>{cadaEndereco.complemento}</td>
        <td>{cadaEndereco.referencia}</td>
        <td>
          <button
            onClick={(e) => this.remover(cadaEndereco)}
            type="button"
            className="btn btn-danger"
          >
            Remover
          </button>
          <button
            style={!cadaEndereco.ativo ? { display: "none" } : null}
            onClick={(e) => this.marcaComoInativo(cadaEndereco)}
            type="button"
            className="btn btn-success"
          >
            Ativo
          </button>
          <button
            style={cadaEndereco.ativo ? { display: "none" } : null}
            onClick={(e) => this.marcaComoAtivo(cadaEndereco)}
            type="button"
            className="btn btn-warning"
          >
            Inativo
          </button>
        </td>
      </tr>
    ));
  }

  setCep(e) {
    this.setState({
      cep: e.target.value,
    });
  }
  setEstado(e) {
    this.setState({
      estado: e.target.value,
    });
  }
  setCidade(e) {
    this.setState({
      cidade: e.target.value,
    });
  }
  setBairro(e) {
    this.setState({
      bairro: e.target.value,
    });
  }
  setLogradouro(e) {
    this.setState({
      logradouro: e.target.value,
    });
  }
  setEndereco(e) {
    this.setState({
      endereco: e.target.value,
    });
  }
  setNumero(e) {
    this.setState({
      numero: e.target.value,
    });
  }
  setComplemento(e) {
    this.setState({
      complemento: e.target.value,
    });
  }
  setReferencia(e) {
    this.setState({
      referencia: e.target.value,
    });
  }
  cadastrar() {
    const newTask = {
      cep: this.state.cep,
      estado: this.state.estado,
      cidade: this.state.cidade,
      bairro: this.state.bairro,
      logradouro: this.state.logradouro,
      endereco: this.state.endereco,
      numero: this.state.numero,
      complemento: this.state.complemento,
      referencia: this.state.referencia,
      ativo: this.state.ativo,
    };

    axios
      .post(`http://localhost:3003/api/enderecos`, newTask)
      .then((resposta) => {
        console.log(`Funcionou ${resposta.data}`);
        this.buscaEnderecos();
      });
  }

  render() {
    return (
      <div className="form">
        <div className="form-group">
          <label htmlFor="cep"> CEP </label>
          <input
            className="form-control"
            type="text"
            id="cep"
            onChange={(e) => this.setCep(e)}
            value={this.state.cep}
          />
        </div>
        <div className="form-group">
          <label htmlFor="estado"> Estado </label>
          <input
            className="form-control"
            type="text"
            id="estado"
            onChange={(e) => this.setEstado(e)}
            value={this.state.estado}
          />
        </div>
        <div className="form-group">
          <label htmlFor="cidade"> Cidade </label>
          <input
            className="form-control"
            type="text"
            id="cidade"
            onChange={(e) => this.setCidade(e)}
            value={this.state.cidade}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bairro"> Bairro </label>
          <input
            className="form-control"
            type="text"
            id="bairro"
            onChange={(e) => this.setBairro(e)}
            value={this.state.bairro}
          />
        </div>
        <div className="form-group">
          <label htmlFor="logradouro"> Logradouro </label>
          <input
            className="form-control"
            type="text"
            id="logradouro"
            onChange={(e) => this.setLogradouro(e)}
            value={this.state.logradouro}
          />
        </div>
        <div className="form-group">
          <label htmlFor="endereco"> Endereco </label>
          <input
            className="form-control"
            type="text"
            id="endereco"
            onChange={(e) => this.setEndereco(e)}
            value={this.state.endereco}
          />
        </div>
        <div className="form-group">
          <label htmlFor="numero"> Numero </label>
          <input
            className="form-control"
            type="number"
            id="numero"
            onChange={(e) => this.setNumero(e)}
            value={this.state.numero}
          />
        </div>
        <div className="form-group">
          <label htmlFor="complemento"> Complemento </label>
          <input
            className="form-control"
            type="text"
            id="complemento"
            onChange={(e) => this.setComplemento(e)}
            value={this.state.complemento}
          />
        </div>
        <div className="form-group">
          <label htmlFor="referencia"> Referencia </label>
          <input
            className="form-control"
            type="text"
            id="referencia"
            onChange={(e) => this.setReferencia(e)}
            value={this.state.referencia}
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
          Lista de Endereços
          <table className="table">
            <thead>
              <tr>
                <th>CEP</th>
                <th>Estado</th>
                <th>Cidade</th>
                <th>Bairro</th>
                <th>Logradouro</th>
                <th>Endereco</th>
                <th>Número</th>
                <th>Complemento</th>
                <th>Referência</th>
              </tr>
            </thead>
            <tbody>{this.criaLinhasTabela()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
