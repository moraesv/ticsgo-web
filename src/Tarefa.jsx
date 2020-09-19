import React from "react";
import { Component } from "react";
import PageHeader from "./template/PageHeader";
import TarefaForm from "./TarefaForm";

export default class Tarefa extends Component {
  render() {
    return (
      <div>
        <PageHeader titulo="Tarefas" subtitulo="Cadastro" />
        <TarefaForm />
      </div>
    );
  }
}
