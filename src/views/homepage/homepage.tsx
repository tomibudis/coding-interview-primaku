import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// import { useSelector } from "react-redux";
// import { RootState } from "~/store";
import useGetPokemons from "~/hooks/queries/use-get-pokemons.query";

import PokemonCard from "~/components/PokemonCard";

const Homepage = () => {
  const { ref, inView } = useInView();
  // const {} = useSelector((state: RootState) => state.)

  const { data } = useGetPokemons({ offset: 0 });

  const listPokemon = data?.results;

  useEffect(() => {
    if (inView) {
      // console.log("trigger Load more");
    }
  }, [inView]);

  return (
    <div className="w-screen h-screen flex flex-col items-center">
      <div className="h-full container">
        <div className="w-full bg-red-800 flex p-4">
          <h4 className="text-lg font-bold text-white">Pokedex</h4>
        </div>
        <div className="grid grid-cols-2 bg-neutral-600 gap-2 p-2">
          {listPokemon?.map((pokemon, idx) => {
            return (
              <PokemonCard key={idx} name={pokemon.name} url={pokemon.url} />
            );
          })}
        </div>
        <div ref={ref}>Triggered Load More</div>
      </div>
    </div>
  );
};

export default Homepage;
