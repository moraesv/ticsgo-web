import React from "react";
import { Component } from "react";
import PageHeader from "./template/PageHeader";
import OficialForm from "./OficialForm";

export default class Oficial extends Component {
  render() {
    return (
      <div>
        <PageHeader titulo="Oficiais" subtitulo="Cadastro" />
        <OficialForm />
      </div>
    );
  }
}
