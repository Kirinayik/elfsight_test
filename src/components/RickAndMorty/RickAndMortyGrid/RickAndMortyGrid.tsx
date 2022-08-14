import RickAndMortyItem from '../RickAndMortyItem/RickAndMortyItem'
import { Button, Grid, Spinner, VStack } from '@chakra-ui/react'
import { useCharactersQuery } from '../../../store/rickAndMorty/rickAndMortyApi'
import { generateUrl } from '../../../utils/generateUrl'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { nextPage } from '../../../store/rickAndMorty/rickAndMortyState'

const RickAndMortyGrid = () => {
    const dispatch = useAppDispatch()
    const { filters, page } = useAppSelector((state) => state.rickAndMorty)
    const { data, isFetching } = useCharactersQuery(generateUrl(filters, page))

    if (isFetching) {
        return (
            <VStack flexGrow={'1'} justifyContent={'center'}>
                <Spinner size="lg" />
            </VStack>
        )
    }

    const handlePagination = () => void dispatch(nextPage())

    return (
        <>
            <Grid
                templateColumns="repeat(auto-fill, minmax(240px, 1fr))"
                templateRows={'repeat(auto-fit, minmax(240px, 1fr))'}
                gap={6}
            >
                {data?.results.map((character) => (
                    <RickAndMortyItem key={character.id} character={character} />
                ))}
            </Grid>
            {data?.info.pages !== page && (
                <Button onClick={handlePagination} minW={'200px'} alignSelf={'center'} colorScheme={'facebook'}>
                    Load more
                </Button>
            )}
        </>
    )
}

export default RickAndMortyGrid
