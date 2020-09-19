import React from "react";
import { Component } from "react";
import PageHeader from "./template/PageHeader";

export default class About extends Component {
  render() {
    return (
      <div>
        <PageHeader titulo="Sobre" subtitulo="Nós" />
        <h2> Nossa História </h2>
        <p> Trabalhos desde o descobrimento do Brasil</p>
        <h2> Missão e Visão </h2>
        <p> Conquistar o mundo </p>
        <h2> Imprensa </h2>
        <p> Somos globais </p>
      </div>
    );
  }
}
