import { Box, Button, HStack } from '@chakra-ui/react'
import { useState } from 'react'
import RickAndMortyFilterModal from './RickAndMortyFilterModal'
import { useModal } from '../../../hooks/useModal'

const RickAndMortyFilter = () => {
    const [filters, setFilters] = useState<string[]>([])
    const [isOpen, handleSetIsOpen] = useModal()

    return (
        <HStack alignSelf={'flex-start'} spacing={'30px'}>
            <Button minW={'200px'}
                    onClick={handleSetIsOpen}
                    colorScheme={'blackAlpha'}
            border={'2px solid black'}>
                Filters
            </Button>
            {filters.length > 0 && (
                <HStack>
                    {filters.map(filter => (
                        <Box>{filter}</Box>
                    ))}
                </HStack>
            )}
            <RickAndMortyFilterModal isOpen={isOpen} handleSetIsOpen={handleSetIsOpen}/>
        </HStack>
    )
}

export default RickAndMortyFilter