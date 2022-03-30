import React, { useEffect, useState } from "react";
import { PersonagemInterface } from "./Interface";
import {
  ButtonPaginacao,
  FirstLastLocal,
  Foto,
  Informacoes,
  LocalVisto,
  Nome,
  PaginacaoContainer,
  PaginacaoSection,
  Personagem,
  StatusPersonagem,
} from "./Styles";

const Paginacao = () => {
  const [maxBotoes, setMaxBotoes] = useState<Array<number>>([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  const [current, setCurrent] = useState<number>(maxBotoes[4]);
  const [data, setData] = useState<Array<PersonagemInterface>>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character?page=1")
      .then((response) => response.json())
      .then((dados) => setData(dados.results));
  }, []);

  function pegaDadosDaPagina(event: React.MouseEvent<HTMLButtonElement>) {
    let pagina_clicada = +event.currentTarget.innerText;

    if (pagina_clicada > current) {
      pagina_clicada = current + 1;
    } else if (pagina_clicada < current) {
      pagina_clicada = current - 1;
    }

    fetch(`https://rickandmortyapi.com/api/character?page=${pagina_clicada}`)
      .then((response) => response.json())
      .then((dados) => {
        setData(dados.results);
      });

    setMaxBotoes(maxBotoes.map((item) => (item += 1)));
    setCurrent(maxBotoes[5]);
  }

  return (
    <>
      <PaginacaoSection>
        {data &&
          data.map((personagem) => (
            <Personagem key={personagem.id}>
              <Foto url={personagem.image} />
              <Informacoes>
                <Nome>{personagem.name}</Nome>
                <StatusPersonagem alive={personagem.status}>
                  {personagem.status === "unknown"
                    ? `${personagem.species}`
                    : `${personagem.status} - ${personagem.species}`}
                </StatusPersonagem>
                <FirstLastLocal>Pertence:</FirstLastLocal>
                <LocalVisto>{personagem.location.name}</LocalVisto>
                <FirstLastLocal>Origen:</FirstLastLocal>
                <LocalVisto>
                  {personagem.origin.name === "unknow"
                    ? personagem.origin.name
                    : "Não encontrado"}
                </LocalVisto>
              </Informacoes>
            </Personagem>
          ))}
      </PaginacaoSection>
      <PaginacaoContainer>
        {maxBotoes.map((item) => (
          <ButtonPaginacao
            background={current === item ? "#9e9e9e" : "9e9e9e"}
            key={item}
            onClick={pegaDadosDaPagina}
          >
            {item}
          </ButtonPaginacao>
        ))}
      </PaginacaoContainer>
    </>
  );
};

export default Paginacao;
