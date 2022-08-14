import RickAndMortyItem from '../RickAndMortyItem/RickAndMortyItem'
import { Box, Grid, Spinner, VStack } from '@chakra-ui/react'
import { useCharactersQuery } from '../../../store/rickAndMorty/rickAndMortyApi'
import { useContext } from 'react'
import { RickAndMortyContext, RickAndMortyContextValue } from '../../../context/rickAndMortyContext'
import { generateUrl } from '../../../utils/generateUrl'

const RickAndMortyGrid = () => {
    const { state } = useContext(RickAndMortyContext) as RickAndMortyContextValue
    const { data, isFetching } = useCharactersQuery(generateUrl(state))

    if (isFetching) {
        return (
            <VStack flexGrow={'1'} justifyContent={'center'}>
                <Spinner size="lg" />
            </VStack>
        )
    }

    return (
        <Grid
            templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
            templateRows={'repeat(auto-fit, minmax(240px, 1fr))'}
            gap={6}
        >
            {data && data.results.map((character) => <RickAndMortyItem key={character.id} character={character} />)}
        </Grid>
    )
}

export default RickAndMortyGrid
