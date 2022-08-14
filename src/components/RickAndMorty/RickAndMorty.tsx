import { VStack } from '@chakra-ui/react'
import RickAndMortyGrid from './RickAndMortyGrid/RickAndMortyGrid'
import RickAndMortyFilter from './RickAndMortyFilter/RickAndMortyFilter'
import { RickAndMortyProvider } from '../../context/rickAndMortyContext'

const RickAndMorty = () => {
    return (
        <RickAndMortyProvider>
            <VStack alignItems={'stretch'} spacing={'15px'} flexGrow={'1'}>
                <RickAndMortyFilter />
                <RickAndMortyGrid />
            </VStack>
        </RickAndMortyProvider>
    )
}

export default RickAndMorty
