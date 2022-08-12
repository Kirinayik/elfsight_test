import {RickAndMortyContainer} from "./RickAndMorty.styles";
import {Heading} from "@chakra-ui/react";

const RickAndMorty = () => {
  return (
    <RickAndMortyContainer>
      <Heading sx={{ alignSelf: "center" }}>The Rick and Morty</Heading>
    </RickAndMortyContainer>
  );
};

export default RickAndMorty;
