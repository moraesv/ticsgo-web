import React from "react";
import { Component } from "react";
import PageHeader from "./template/PageHeader";
import EnderecoForm from "./EnderecoForm";

export default class Endereco extends Component {
  render() {
    return (
      <div>
        <PageHeader titulo="Enderecos" subtitulo="Cadastro" />
        <EnderecoForm />
      </div>
    );
  }
}
