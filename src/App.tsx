import RickAndMorty from './components/RickAndMorty/RickAndMorty'
import { Box, Heading } from '@chakra-ui/react'

const App = () => {
    return (
        <Box display={'flex'} flexDir={'column'} p={['15px']} minHeight={'100vh'}>
            <Heading as={'h1'} size={['lg', '2xl']} alignSelf="center" mb={'15px'}>
                The Rick and Morty
            </Heading>
            <RickAndMorty />
        </Box>
    )
}

export default App
