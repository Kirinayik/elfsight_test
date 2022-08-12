import {Grid, Spinner, VStack} from "@chakra-ui/react";
import RickAndMortyItem from "./RickAndMortyItem";
import {ICharacter} from "../../types/types";
import {useGetCharactersQuery} from '../../store/rickAndMorty/rickAndMortyApi'

const RickAndMorty = () => {
    const {data, error, isLoading } = useGetCharactersQuery()

    if (isLoading) {
        return (
            <VStack flexGrow={'1'} justifyContent={'center'}>
                <Spinner size='lg'/>
            </VStack>
        )
    }

  return (
        <Grid templateColumns='repeat(auto-fill, minmax(230px, 1fr))' gap={6}>
            {data?.results && data.results.map((character:ICharacter) => (
                <RickAndMortyItem key={character.id} character={character}/>
            ))}
        </Grid>
  );
};

export default RickAndMorty;
