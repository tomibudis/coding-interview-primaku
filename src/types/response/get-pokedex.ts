export interface PokedexResponse {
  count: number;
  results: {
    name: string;
    url: string;
  }[];
}
