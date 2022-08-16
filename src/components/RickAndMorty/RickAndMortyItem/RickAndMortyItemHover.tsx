import { VStack } from '@chakra-ui/react'
import { ItemHoverContainer } from '../RickAndMorty.styles'
import { FC } from 'react'
import { ICharacter } from '../../../types/types'
import Title from './common/Title'
import StatusField from './common/StatusField'
import InfoField from './common/InfoField'
import { useEpisodesQuery } from '../../../store/rickAndMorty/rickAndMortyApi'

type RickAndMortyHoverProps = {
    character: ICharacter
}

const RickAndMortyItemHover: FC<RickAndMortyHoverProps> = ({
    character: { location, name, status, species, episode },
}) => {
    const { data } = useEpisodesQuery(episode[0].split('/').slice(-1)[0])

    return (
        <ItemHoverContainer>
            <VStack spacing="10px" alignItems={'flex-start'}>
                <Title title={name} />
                <StatusField status={status} species={species} />
                <InfoField text={'Last known location:'} value={location.name} />
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/*@ts-ignore*/}
                <InfoField text={'First seen in:'} value={data?.name} />
            </VStack>
        </ItemHoverContainer>
    )
}

export default RickAndMortyItemHover
