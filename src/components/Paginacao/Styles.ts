import styled from "styled-components";
import {
  BotaoPaginacaoInterface,
  FotoInterface,
  InformacoesInterface,
} from "./Interface";

const PaginacaoSection = styled.section`
  width: 90%;
  height: auto;
  padding: 2rem 0;
  margin: 0 auto;
  display: grid;
  gap: 2rem 1rem;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 1fr);
  justify-items: center;
  @media (max-width: 1250px) {
    grid-template-columns: 1fr;
  }
`;

const Personagem = styled.article`
  background: #3c3e44;
  width: 35rem;
  height: 12rem;
  border-radius: 2px;
  display: flex;
  border-radius: 2px;
  overflow: hidden;
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (max-width: 500px) {
    flex-direction: column;
    width: 16rem;
    height: auto;
  }
`;

const Foto = styled.div<FotoInterface>`
  width: 18rem;
  height: 100%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  @media (max-width: 500px) {
    width: 100%;
    height: 17rem;
  }
`;

const Informacoes = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 500px) {
    height: 15rem;
  }
`;

const Nome = styled.h1`
  line-height: 1.5;
`;

const StatusPersonagem = styled.span<InformacoesInterface>`
  font-weight: 500;
  line-height: 1.5;
  &::before {
    content: "";
    width: 7px;
    height: 7px;
    border-radius: 50%;
    display: inline-block;
    background-color: ${(props) =>
      props.alive === "Dead" ? "#FA2819" : "#42E033"};
    margin-bottom: 2px;
    margin-right: 5px;
  }
`;

const FirstLastLocal = styled.span`
  font-size: 0.9rem;
  font-weight: bold;
  line-height: 1.5;
  margin-top: 10px;
  color: #9e9e9e;
`;

const LocalVisto = styled.p`
  line-height: 1.5;
`;

const PaginacaoContainer = styled.div`
  width: 60%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 650px) {
    width: 90%;
  }
`;

const ButtonPaginacao = styled.button<BotaoPaginacaoInterface>`
  padding: 0.3rem 0.6rem;
  cursor: pointer;
  border: none;
  background-color: ${(props) => (props.background ? props.background : "")};
`;

export {
  PaginacaoSection,
  Personagem,
  Foto,
  Informacoes,
  Nome,
  StatusPersonagem,
  FirstLastLocal,
  LocalVisto,
  PaginacaoContainer,
  ButtonPaginacao,
};
