import RickAndMortyItem from '../RickAndMortyItem/RickAndMortyItem'
import { Button, Flex, Grid, Spinner } from '@chakra-ui/react'
import { useCharactersQuery } from '../../../store/rickAndMorty/rickAndMortyApi'
import { generateUrl } from '../../../utils/generateUrl'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { charactersSelectors, nextPage } from '../../../store/rickAndMorty/rickAndMortyState'

const RickAndMortyGrid = () => {
    const dispatch = useAppDispatch()
    const characters = useAppSelector(charactersSelectors.selectAll)
    const { filters, page, total } = useAppSelector((state) => state.rickAndMorty)
    const { isFetching } = useCharactersQuery(generateUrl(filters, page), { refetchOnMountOrArgChange: true })

    const handleLoadMore = () => void dispatch(nextPage())

    return (
        <>
            <Grid
                templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
                templateRows={'repeat(auto-fit, minmax(240px, 1fr))'}
                gap={6}
                data-testid={'characters-list'}
            >
                {characters &&
                    characters.map((character) => <RickAndMortyItem key={character.id} character={character} />)}
            </Grid>
            {isFetching ? (
                <Flex justifyContent={'center'}>
                    <Spinner size={'lg'} data-testid={'spinner'} />
                </Flex>
            ) : (
                <>
                    {total !== page && (
                        <Button onClick={handleLoadMore} minW={'200px'} alignSelf={'center'} colorScheme={'facebook'}>
                            Load more
                        </Button>
                    )}
                </>
            )}
        </>
    )
}

export default RickAndMortyGrid
