import React from "react";

export default (props) => (
  <header className="container">
    <h2>
      {props.titulo} <small> {props.subtitulo} </small>
    </h2>
  </header>
);
