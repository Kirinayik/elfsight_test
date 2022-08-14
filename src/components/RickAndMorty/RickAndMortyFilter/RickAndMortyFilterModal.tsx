import { ChangeEvent, FC, useReducer } from 'react'
import {
    Box,
    Button,
    Flex,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    VStack,
} from '@chakra-ui/react'
import RadioFilter from './common/RadioFilter'
import { filterInitialState, filterReducer } from '../../../reducers/filterReducer'
import { useFilterRadios } from '../../../hooks/useFilterRadios'
import { useAppDispatch, useAppSelector } from '../../../store/hooks'
import { setFilters } from '../../../store/rickAndMorty/rickAndMortyState'

type RickAndMortyFilterModalProps = {
    isOpen: boolean
    handleSetIsOpen: () => void
}

const RickAndMortyFilterModal: FC<RickAndMortyFilterModalProps> = ({ isOpen, handleSetIsOpen }) => {
    const { statusRadios, speciesRadios, genderRadios } = useFilterRadios()
    const dispatch = useAppDispatch()
    const { filters } = useAppSelector((state) => state.rickAndMorty)
    const [currentState, currentDispatch] = useReducer(filterReducer, filterInitialState)
    const { name, status, gender, species } = currentState

    const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
        currentDispatch({ type: 'name', payload: e.target.value })
    }

    const handleOnClose = () => {
        if (JSON.stringify(currentState) !== JSON.stringify(filters)) {
            dispatch(setFilters(currentState))
        }

        handleSetIsOpen()
    }

    const handleClearFilters = () => {
        currentDispatch({
            type: 'clearState',
            payload: '',
        })
    }

    return (
        <Modal isOpen={isOpen} onClose={handleOnClose} isCentered size={'2xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody py={'50px'} pr={'30px'}>
                    <VStack alignItems={'stretch'} spacing={5}>
                        <Flex gap={'30px'} alignItems={'center'}>
                            <Box>Name: </Box>
                            <Input value={name} onChange={handleSetInput} />
                        </Flex>
                        <Flex gap={'30px'}>
                            <Box>Status: </Box>
                            <RadioFilter
                                value={status}
                                dispatch={currentDispatch}
                                radios={statusRadios}
                                type={'status'}
                            />
                        </Flex>
                        <Flex gap={'30px'}>
                            <Box>Gender: </Box>
                            <RadioFilter
                                value={gender}
                                dispatch={currentDispatch}
                                radios={genderRadios}
                                type={'gender'}
                            />
                        </Flex>
                        <Flex gap={'30px'}>
                            <Box>Species: </Box>
                            <RadioFilter
                                value={species}
                                dispatch={currentDispatch}
                                radios={speciesRadios}
                                type={'species'}
                            />
                        </Flex>
                    </VStack>
                </ModalBody>
                <ModalFooter justifyContent={'flex-start'}>
                    <Button colorScheme={'facebook'} onClick={handleClearFilters}>
                        Clear filters
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default RickAndMortyFilterModal
