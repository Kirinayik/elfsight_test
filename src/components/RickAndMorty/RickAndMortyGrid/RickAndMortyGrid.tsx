import RickAndMortyItem from '../RickAndMortyItem/RickAndMortyItem'
import { Button, Grid, Spinner, VStack } from '@chakra-ui/react'
import { useCharactersQuery } from '../../../store/rickAndMorty/rickAndMortyApi'
import { generateUrl } from '../../../utils/generateUrl'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { charactersSelectors, nextPage } from '../../../store/rickAndMorty/rickAndMortyState'

const RickAndMortyGrid = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(charactersSelectors.selectAll)
    const { filters, page, total } = useAppSelector((state) => state.rickAndMorty)
    const { isFetching } = useCharactersQuery(generateUrl(filters, page))

    const handleLoadMore = () => void dispatch(nextPage())

    return (
        <>
            <Grid
                templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
                templateRows={'repeat(auto-fit, minmax(240px, 1fr))'}
                gap={6}
            >
                {characters &&
                    characters.map((character) => <RickAndMortyItem key={character.id} character={character} />)}
            </Grid>
            {total !== page && (
                <Button onClick={handleLoadMore} minW={'200px'} alignSelf={'center'} colorScheme={'facebook'}>
                    Load more
                </Button>
            )}
        </>
    )
}

export default RickAndMortyGrid
