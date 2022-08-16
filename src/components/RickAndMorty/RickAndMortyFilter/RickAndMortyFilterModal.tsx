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
import { useAppDispatch } from '../../../store/hooks'
import { setFilters } from '../../../store/rickAndMorty/rickAndMortyState'

type RickAndMortyFilterModalProps = {
    isOpen: boolean
    handleSetIsOpen: () => void
}

const RickAndMortyFilterModal: FC<RickAndMortyFilterModalProps> = ({ isOpen, handleSetIsOpen }) => {
    const { statusRadios, speciesRadios, genderRadios } = useFilterRadios()
    const dispatch = useAppDispatch()
    const [currentState, currentDispatch] = useReducer(filterReducer, filterInitialState)
    const { name, status, gender, species } = currentState

    const handleSetInput = (e: ChangeEvent<HTMLInputElement>) => {
        currentDispatch({ type: 'name', payload: e.target.value })
    }

    const handleOnClose = () => {
        currentDispatch({
            type: 'clearState',
            payload: '',
        })
        handleSetIsOpen()
    }

    const handleSetFilters = () => {
        dispatch(setFilters(currentState))
        console.log(currentState)
        handleSetIsOpen()
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={handleOnClose}
            isCentered
            size={{
                base: 'full',
                sm: 'md',
                md: '2xl',
            }}
            scrollBehavior={'inside'}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalCloseButton />
                <ModalBody py={'50px'} pr={'30px'}>
                    <VStack alignItems={'stretch'} gap={'30px'} spacing={0}>
                        <Flex
                            gap={['10px']}
                            alignItems={['flex-start', null, null, 'center']}
                            flexDir={['column', null, null, 'row']}
                        >
                            <Box>Name: </Box>
                            <Input value={name} onChange={handleSetInput} />
                        </Flex>
                        <Flex gap={['10px']} flexDir={['column', null, null, 'row']}>
                            <Box>Status: </Box>
                            <RadioFilter
                                value={status}
                                dispatch={currentDispatch}
                                radios={statusRadios}
                                type={'status'}
                            />
                        </Flex>
                        <Flex gap={['10px']} flexDir={['column', null, null, 'row']}>
                            <Box>Gender: </Box>
                            <RadioFilter
                                value={gender}
                                dispatch={currentDispatch}
                                radios={genderRadios}
                                type={'gender'}
                            />
                        </Flex>
                        <Flex gap={['10px']} flexDir={['column', null, null, 'row']}>
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
                <ModalFooter gap={'30px'}>
                    <Button colorScheme={'facebook'} onClick={handleSetFilters}>
                        Submit
                    </Button>
                    <Button onClick={handleOnClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default RickAndMortyFilterModal
