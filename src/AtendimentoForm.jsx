import React, { Component } from "react";
import axios from "axios";

export default class AtendimentoForm extends Component {
  constructor() {
    super();
    this.state = {
      horaAtendimento: "",
      descricao: "",
      horaInicioAtuacao: "",
      horaFimAtuacao: "",
      formaSolicitacao: "",
      nomeSolicitante: "",
      qualificadoEnvolvido: "",
      telefone: "",
      outros: "",
      ativo: true,
      lista: [],
    };
    this.buscaAtendimentos();
  }
  buscaAtendimentos() {
    axios
      .get(`http://localhost:3003/api/atendimentos?sort=-criadoEm`)
      .then((resp) => this.setState({ lista: resp.data }));
  }

  remover(atendimento) {
    axios
      .delete(`http://localhost:3003/api/atendimentos/${atendimento._id}`)
      .then((resp) => this.buscaAtendimentos());
  }

  marcaComoAtivo(atendimento) {
    axios
      .put(`http://localhost:3003/api/atendimentos/${atendimento._id}`, {
        ...atendimento,
        ativo: true,
      })
      .then((resp) => this.buscaAtendimentos());
  }

  marcaComoInativo(atendimento) {
    axios
      .put(`http://localhost:3003/api/atendimentos/${atendimento._id}`, {
        ...atendimento,
        ativo: false,
      })
      .then((resp) => this.buscaAtendimentos());
  }

  criaLinhasTabela() {
    return this.state.lista.map((cadaAtendimento) => (
      <tr key={cadaAtendimento._id}>
        <td>{cadaAtendimento.horaAtendimento}</td>
        <td>{cadaAtendimento.descricao}</td>
        <td>{cadaAtendimento.horaInicioAtuacao}</td>
        <td>{cadaAtendimento.horaFimAtuacao}</td>
        <td>{cadaAtendimento.formaSolicitacao}</td>
        <td>{cadaAtendimento.nomeSolicitante}</td>
        <td>{cadaAtendimento.qualificadoEnvolvido}</td>
        <td>{cadaAtendimento.telefone}</td>
        <td>{cadaAtendimento.outros}</td>
        <td>
          <button
            onClick={(e) => this.remover(cadaAtendimento)}
            type="button"
            className="btn btn-danger"
          >
            Remover
          </button>
          <button
            style={!cadaAtendimento.ativo ? { display: "none" } : null}
            onClick={(e) => this.marcaComoInativo(cadaAtendimento)}
            type="button"
            className="btn btn-success"
          >
            Ativo
          </button>
          <button
            style={cadaAtendimento.ativo ? { display: "none" } : null}
            onClick={(e) => this.marcaComoAtivo(cadaAtendimento)}
            type="button"
            className="btn btn-warning"
          >
            Inativo
          </button>
        </td>
      </tr>
    ));
  }

  setHoraAtendimento(e) {
    this.setState({
      horaAtendimento: e.target.value,
    });
  }
  setDescricao(e) {
    this.setState({
      descricao: e.target.value,
    });
  }
  setHoraInicioAtuacao(e) {
    this.setState({
      horaInicioAtuacao: e.target.value,
    });
  }
  setHoraFimAtuacao(e) {
    this.setState({
      horaFimAtuacao: e.target.value,
    });
  }
  setFormaSolicitacao(e) {
    this.setState({
      formaSolicitacao: e.target.value,
    });
  }
  setNomeSolicitante(e) {
    this.setState({
      nomeSolicitante: e.target.value,
    });
  }
  setQualificadoEnvolvido(e) {
    this.setState({
      qualificadoEnvolvido: e.target.value,
    });
  }
  setTelefone(e) {
    this.setState({
      telefone: e.target.value,
    });
  }
  setOutros(e) {
    this.setState({
      outros: e.target.value,
    });
  }
  cadastrar() {
    const newAtendimento = {
      horaAtendimento: this.state.horaAtendimento,
      descricao: this.state.descricao,
      horaInicioAtuacao: this.state.horaInicioAtuacao,
      horaFimAtuacao: this.state.horaFimAtuacao,
      formaSolicitacao: this.state.formaSolicitacao,
      nomeSolicitante: this.state.nomeSolicitante,
      qualificadoEnvolvido: this.state.qualificadoEnvolvido,
      telefone: this.state.telefone,
      outros: this.state.outros,
      ativo: this.state.ativo,
    };

    axios
      .post(`http://localhost:3003/api/atendimentos`, newAtendimento)
      .then((resposta) => {
        console.log(`Funcionou ${resposta.data}`);
        this.buscaAtendimentos();
      });
  }

  render() {
    return (
      <div className="form">
        <div className="form-group">
          <label htmlFor="horaAtendimento"> Hora do Atendimento </label>
          <input
            className="form-control"
            type="text"
            id="horaAtendimento"
            onChange={(e) => this.setHoraAtendimento(e)}
            value={this.state.horaAtendimento}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao"> Descrição </label>
          <input
            className="form-control"
            type="text"
            id="descricao"
            onChange={(e) => this.setDescricao(e)}
            value={this.state.descricao}
          />
        </div>
        <div className="form-group">
          <label htmlFor="horaInicioAtuacao"> Hora de Início da Atuação </label>
          <input
            className="form-control"
            type="text"
            id="horaInicioAtuacao"
            onChange={(e) => this.setHoraInicioAtuacao(e)}
            value={this.state.horaInicioAtuacao}
          />
        </div>
        <div className="form-group">
          <label htmlFor="horaFimAtuacao"> Hora do Fim da Atuação </label>
          <input
            className="form-control"
            type="text"
            id="horaFimAtuacao"
            onChange={(e) => this.setHoraFimAtuacao(e)}
            value={this.state.horaFimAtuacao}
          />
        </div>
        <div className="form-group">
          <label htmlFor="formaSolicitacao"> Forma de Solicitação </label>
          <input
            className="form-control"
            type="number"
            id="formaSolicitacao"
            onChange={(e) => this.setFormaSolicitacao(e)}
            value={this.state.formaSolicitacao}
          />
        </div>
        <div className="form-group">
          <label htmlFor="nomeSolicitante"> Nome do Solicitante </label>
          <input
            className="form-control"
            type="text"
            id="nomeSolicitante"
            onChange={(e) => this.setNomeSolicitante(e)}
            value={this.state.nomeSolicitante}
          />
        </div>
        <div className="form-group">
          <label htmlFor="qualificadoEnvolvido">
            {" "}
            Qualificado como Envolvido{" "}
          </label>
          <input
            className="form-control"
            type="text"
            id="qualificadoEnvolvido"
            onChange={(e) => this.setQualificadoEnvolvido(e)}
            value={this.state.qualificadoEnvolvido}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefone"> Telefone </label>
          <input
            className="form-control"
            type="number"
            id="telefone"
            onChange={(e) => this.setTelefone(e)}
            value={this.state.telefone}
          />
        </div>
        <div className="form-group">
          <label htmlFor="outros"> Outros </label>
          <input
            className="form-control"
            type="text"
            id="outros"
            onChange={(e) => this.setOutros(e)}
            value={this.state.outros}
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
          Lista de Atendimentos
          <table className="table">
            <thead>
              <tr>
                <th>Hora do Atendimento</th>
                <th>Descrição</th>
                <th>Hora de Início da Atuação</th>
                <th>Hora do Fim da Atuação</th>
                <th>Forma de Solicitação</th>
                <th>Nome do Solicitante</th>
                <th>Qualificado como Envolvido</th>
                <th>Telefone</th>
                <th>Outros</th>
              </tr>
            </thead>
            <tbody>{this.criaLinhasTabela()}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
