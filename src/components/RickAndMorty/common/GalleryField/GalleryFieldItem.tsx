import { Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'

type GalleryFieldItemProps = {
    name: string
    episode: string
}

const GalleryFieldItem: FC<GalleryFieldItemProps> = ({ name, episode }) => {
    return (
        <VStack flex={'0 0 100px'} maxW={'100px'} alignItems={'flex-start'} spacing={0}>
            <Text fontSize={'14px'} noOfLines={1}>
                {name}
            </Text>
            <Text fontSize={'12px'}>{episode}</Text>
        </VStack>
    )
}

export default GalleryFieldItem
