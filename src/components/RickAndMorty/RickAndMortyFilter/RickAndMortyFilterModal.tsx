import { FC } from 'react'
import {
    Box,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    VStack,
} from '@chakra-ui/react'
import RadioFilter from './common/RadioFilter'
import { useFilterParams } from '../../../hooks/useFilterParams'

type RickAndMortyFilterModalProps = {
    isOpen: boolean
    handleSetIsOpen: () => void
}

const RickAndMortyFilterModal:FC<RickAndMortyFilterModalProps> = ({isOpen, handleSetIsOpen}) => {
    const statusRadios = [{value: 'alive', name: 'Alive'}, {value: 'dead', name: 'Dead'},{value: 'unknown', name: 'Unknown'}, {value: 'all', name: 'All'}]
    const genderRadios = [{value: 'female', name: 'Female'}, {value: 'male', name: 'Male'},{value: 'genderless', name: 'Genderless'},{value: 'unknown', name: 'Unknown'}, {value: 'all', name: 'All'}]
    const speciesRadios = [{value: 'human', name: 'Human'}, {value: 'alien', name: 'Alien'}, {value: 'all', name: 'All'}]
    const {status, species,  gender, name, setStatus, setSpecies, setGender, handleSetName} = useFilterParams()

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleSetIsOpen}
            isCentered
            size={'2xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody py={'50px'} pr={'30px'}>
                    <VStack alignItems={'stretch'} spacing={5}>
                        <Flex gap={'30px'} alignItems={'center'}>
                            <Box>Name: </Box>
                            <Input value={name} onChange={handleSetName}/>
                        </Flex>
                        <Flex gap={'30px'}>
                            <Box>Status: </Box>
                            <RadioFilter radios={statusRadios} currentValue={status} setValue={setStatus}/>
                        </Flex>
                        <Flex gap={'30px'}>
                            <Box>Gender: </Box>
                            <RadioFilter radios={genderRadios} currentValue={gender} setValue={setGender}/>
                        </Flex>
                        <Flex gap={'30px'}>
                            <Box>Species: </Box>
                            <RadioFilter radios={speciesRadios} currentValue={species} setValue={setSpecies}/>
                        </Flex>
                    </VStack>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RickAndMortyFilterModal