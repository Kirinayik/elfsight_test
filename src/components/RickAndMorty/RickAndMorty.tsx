import { VStack } from '@chakra-ui/react'
import RickAndMortyGrid from './RickAndMortyGrid/RickAndMortyGrid'
import RickAndMortyFilter from './RickAndMortyFilter/RickAndMortyFilter'

const RickAndMorty = () => {
    return (
        <VStack alignItems={'stretch'} spacing={'15px'} flexGrow={'1'}>
            <RickAndMortyFilter/>
            <RickAndMortyGrid/>
        </VStack>
    )
}

export default RickAndMorty
