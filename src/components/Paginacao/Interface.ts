export interface PersonagemInterface {
  created: string;
  episode: Array<string>;
  gender: string;
  id: number;
  image: string;
  location: LocationInterface;
  name: string;
  origin: OriginInterface;
  species: string;
  status: string;
  type: string;
  url: string;
}

export interface LocationInterface {
  name: string;
  url: string;
}

export interface OriginInterface {
  name: string;
  url: string;
}

export interface FotoInterface {
  url?: string;
}

export interface InformacoesInterface {
  alive: string;
}

export interface BotaoPaginacaoInterface {
  background?: string;
}
