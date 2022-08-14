import { VStack } from '@chakra-ui/react'
import { ItemHoverContainer } from '../RickAndMorty.styles'
import { FC, useEffect, useState } from 'react'
import { ICharacter, IEpisode } from '../../../types/types'
import axios from 'axios'
import Title from '../common/Title'
import StatusField from '../common/StatusField'
import InfoField from '../common/InfoField'

type RickAndMortyHoverProps = {
    character: ICharacter
}

const RickAndMortyItemHover: FC<RickAndMortyHoverProps> = ({
    character: { location, name, status, species, episode },
}) => {
    //TODO: обернуть в контекст
    const [firstEpisode, setFirstEpisode] = useState<{ name: string }>({
        name: '',
    })

    useEffect(() => {
        ;(async () => {
            const { data } = await axios.get<IEpisode>(episode[0])
            setFirstEpisode(data)
        })()
    }, [])

    return (
        <ItemHoverContainer>
            <VStack spacing="10px" alignItems={'flex-start'}>
                <Title title={name} />
                <StatusField status={status} species={species} />
                <InfoField text={'Last known location:'} value={location.name} />
                <InfoField text={'First seen in:'} value={firstEpisode.name} />
            </VStack>
        </ItemHoverContainer>
    )
}

export default RickAndMortyItemHover
