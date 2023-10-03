import React from "react";

interface PokemonCardProps {
  name: string;
  url?: string;
}

const PokemonCard: React.FC<PokemonCardProps> = (props) => {
  const splitUrl = props.url?.split("/");
  const indexPokemon = splitUrl?.[splitUrl?.length - 2];

  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${indexPokemon}.png`;

  return (
    // FIXME: create function to get color according pokemon type
    <div className="rounded-lg p-4 bg-white flex flex-col items-center">
      <img src={urlImage} alt={`pokedex-${urlImage}`} />
      <div>{props?.name}</div>
    </div>
  );
};

export default PokemonCard;
