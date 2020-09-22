import React from "react";
import { Component } from "react";
import PageHeader from "./template/PageHeader";
import AtendimentoForm from "./AtendimentoForm";

export default class Atendimento extends Component {
  render() {
    return (
      <div>
        <PageHeader titulo="Atendimentos" subtitulo="Cadastro" />
        <AtendimentoForm />
      </div>
    );
  }
}
