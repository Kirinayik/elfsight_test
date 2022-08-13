import { Image } from '@chakra-ui/react'
import { FC } from 'react'
import { ICharacter } from '../../types/types'
import { ItemContainer } from './RickAndMorty.styles'
import { useModal } from '../../hooks/useModal'
import RickAndMortyModal from './RickAndMortyModal'
import RickAndMortyHover from './RickAndMortyHover'

type RickAndMortyItemProps = {
    character: ICharacter
}

const RickAndMortyItem: FC<RickAndMortyItemProps> = ({ character }) => {
    const [isOpen, handleSetIsOpen] = useModal()
    const { name, image } = character

    return (
        <ItemContainer onClick={handleSetIsOpen}>
            <Image src={image} alt={name} />
            <RickAndMortyHover character={character} />
            <RickAndMortyModal
                character={character}
                isOpen={isOpen}
                handleSetIsOpen={handleSetIsOpen}
            />
        </ItemContainer>
    )
}

export default RickAndMortyItem
