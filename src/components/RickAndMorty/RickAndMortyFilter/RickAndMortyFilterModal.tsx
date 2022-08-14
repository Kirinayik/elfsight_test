import { ChangeEvent, FC, useContext, useReducer } from 'react'
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
import {
    filterInitialState,
    filterReducer,
    RickAndMortyContext,
    RickAndMortyContextValue,
} from '../../../context/rickAndMortyContext'
import { useFilterRadios } from '../../../hooks/useFilterRadios'

type RickAndMortyFilterModalProps = {
    isOpen: boolean
    handleSetIsOpen: () => void
}

const RickAndMortyFilterModal: FC<RickAndMortyFilterModalProps> = ({ isOpen, handleSetIsOpen }) => {
    const { statusRadios, speciesRadios, genderRadios } = useFilterRadios()
    const { state, dispatch } = useContext(RickAndMortyContext) as RickAndMortyContextValue
    const [currentState, currentDispatch] = useReducer(filterReducer, filterInitialState)
    const { name, status, gender, species } = currentState

    const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
        currentDispatch({ type: 'name', payload: e.target.value })
    }

    const handleOnClose = () => {
        if (!Object.is(currentState, state)) {
            for (let key in currentState) {
                const type = key as 'name' | 'gender' | 'status' | 'species'

                if (currentState[type] !== state[type]) {
                    dispatch({ type, payload: currentState[type] })
                }
            }
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
