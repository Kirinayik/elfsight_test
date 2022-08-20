import { Button, HStack } from '@chakra-ui/react'
import { RickAndMortyFilterModal } from './RickAndMortyFilterModal'
import { useModal } from '@hooks/useModal'

export const RickAndMortyFilter = () => {
    const [isOpen, handleSetIsOpen] = useModal()

    return (
        <HStack alignSelf={'flex-end'} justifyContent={'flex-end'} spacing={'30px'} w={'100%'}>
            <Button w={['100%', '200px']} onClick={handleSetIsOpen} colorScheme={'facebook'}>
                Filters
            </Button>
            <RickAndMortyFilterModal isOpen={isOpen} handleSetIsOpen={handleSetIsOpen} />
        </HStack>
    )
}
