import { useQuery } from "@tanstack/react-query";
import { PokedexResponse } from "~/types/response/get-pokedex";

import axios from "~/utils/axios";

interface PokemonParams {
  limit?: number;
  offset: number;
}

const DEFAULT_LIMIT = 20;
const fetchPokemons = async (params: PokemonParams) => {
  const { data } = await axios.get<PokedexResponse>(
    `https://pokeapi.co/api/v2/pokemon?limit=${DEFAULT_LIMIT}&offset=${params.offset}`
  );
  return data;
};

const useGetPokemons = (params: PokemonParams) => {
  return useQuery(["get-pokemons"], () => fetchPokemons(params));
};

export default useGetPokemons;
