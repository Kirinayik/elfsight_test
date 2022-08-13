import RickAndMortyItem from '../RickAndMortyItem/RickAndMortyItem'
import { Box, Grid, Spinner, VStack } from '@chakra-ui/react'
import { useCharactersQuery } from '../../../store/rickAndMorty/rickAndMortyApi'

const RickAndMortyGrid = () => {
    const { data, error, isLoading } = useCharactersQuery()

    if (isLoading) {
        return (
            <VStack flexGrow={'1'} justifyContent={'center'}>
                <Spinner size="lg" />
            </VStack>
        )
    }

    return (
        <Grid flexGrow={'1'} templateColumns="repeat(auto-fill, minmax(240px, 1fr))" gap={6}>
            {data && data.results.map((character) => (
                    <RickAndMortyItem
                        key={character.id}
                        character={character}
                    />
                ))}
            {error && <Box>Something went wrong</Box>}
        </Grid>
    )
}

export default RickAndMortyGrid