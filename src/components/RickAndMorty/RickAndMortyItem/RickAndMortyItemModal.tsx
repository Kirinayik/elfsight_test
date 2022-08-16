import {
    Box,
    Flex,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    VStack,
} from '@chakra-ui/react'
import { FC } from 'react'
import { ICharacter } from '../../../types/types'
import Title from './common/Title'
import InfoField from './common/InfoField'
import StatusField from './common/StatusField'
import GalleryField from './common/GalleryField/GalleryField'

type RickAndMortyModalProps = {
    character: ICharacter
    isOpen: boolean
    handleSetIsOpen: () => void
}

const RickAndMortyItemModal: FC<RickAndMortyModalProps> = ({
    character: { name, gender, origin, image, status, species, episode },
    isOpen,
    handleSetIsOpen,
}) => {
    return (
        <Modal
            isOpen={isOpen}
            onClose={handleSetIsOpen}
            isCentered
            size={{
                base: 'full',
                sm: 'md',
                md: '2xl',
            }}
            scrollBehavior={'inside'}
        >
            <ModalOverlay />
            <ModalContent sx={{ overflow: 'hidden' }}>
                <ModalCloseButton />
                <ModalBody p={0}>
                    <Flex fontSize={'16px'} flexDir={['column', null, null, 'row']}>
                        <Box flexBasis={'50%'}>
                            <Image w={'100%'} h={'100%'} src={image} alt={name} />
                        </Box>
                        <VStack flexBasis={'50%'} padding={'15px'} alignItems={'flex-start'} overflow={'hidden'}>
                            <Title title={name} />
                            <StatusField status={status} species={species} />
                            <InfoField text={'Gender:'} value={gender} />
                            <InfoField text={'Origin:'} value={origin.name} />
                            <InfoField text={'First seen in:'} value={name} />
                            <GalleryField title={'Episodes:'} gallery={episode} />
                        </VStack>
                    </Flex>
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}

export default RickAndMortyItemModal
