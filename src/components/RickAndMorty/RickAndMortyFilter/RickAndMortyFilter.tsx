import { Button, HStack } from '@chakra-ui/react'
import RickAndMortyFilterModal from './RickAndMortyFilterModal'
import { useModal } from '../../../hooks/useModal'

const RickAndMortyFilter = () => {
    const [isOpen, handleSetIsOpen] = useModal()

    return (
        <HStack alignSelf={'flex-end'} spacing={'30px'}>
            <Button minW={'200px'} onClick={handleSetIsOpen} colorScheme={'facebook'}>
                Filters
            </Button>
            <RickAndMortyFilterModal isOpen={isOpen} handleSetIsOpen={handleSetIsOpen} />
        </HStack>
    )
}

export default RickAndMortyFilter
