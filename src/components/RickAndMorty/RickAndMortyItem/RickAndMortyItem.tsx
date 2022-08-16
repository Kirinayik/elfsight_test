import { Image, Skeleton } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { ICharacter } from '../../../types/types'
import { ItemContainer } from '../RickAndMorty.styles'
import { useModal } from '../../../hooks/useModal'
import RickAndMortyItemModal from './RickAndMortyItemModal'
import RickAndMortyItemHover from './RickAndMortyItemHover'

type RickAndMortyItemProps = {
    character: ICharacter
}

const RickAndMortyItem: FC<RickAndMortyItemProps> = ({ character }) => {
    const [isOpen, handleSetIsOpen] = useModal()
    const { name, image } = character
    const [imageLoaded, setImageLoaded] = useState<boolean>(false)

    const handleSetImageLoaded = () => void setImageLoaded(true)

    return (
        <ItemContainer onClick={handleSetIsOpen}>
            <Skeleton isLoaded={imageLoaded}>
                <Image w={'100%'} loading={'lazy'} src={image} alt={name} onLoad={handleSetImageLoaded} />
            </Skeleton>
            <RickAndMortyItemHover character={character} />
            <RickAndMortyItemModal character={character} isOpen={isOpen} handleSetIsOpen={handleSetIsOpen} />
        </ItemContainer>
    )
}

export default RickAndMortyItem
