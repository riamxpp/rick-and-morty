import React from "react";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

import Paginacao from "./components/Paginacao/Paginacao";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <Header>
        <Titulo>Rick and morty</Titulo>
      </Header>
      <Main>
        <Paginacao />{" "}
      </Main>
    </>
  );
}

export default App;
