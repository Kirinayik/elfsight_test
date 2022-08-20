import { FC } from 'react'
import { Box, Flex, Skeleton } from '@chakra-ui/react'
import { useEpisodesQuery } from '@store/rickAndMorty/rickAndMortyApi'
import { getEpisodesId } from '@utils/getEpisodesId'
import { GalleryFieldItem } from './GalleryFieldItem'
import { IEpisode } from '@global/types'

type GalleryFieldProps = {
    gallery: string[]
    title: string
}

export const GalleryField: FC<GalleryFieldProps> = ({ title, gallery }) => {
    const { data, error, isLoading } = useEpisodesQuery(getEpisodesId(gallery))

    if (error) {
        return null
    }

    return (
        <Box w={'100%'}>
            <Box fontWeight={'700'}>{title}</Box>
            <Flex overflowX={'scroll'} gap={'10px'} alignItems={'center'} py={'5px'}>
                {isLoading ? (
                    <>
                        {gallery.map((_, idx) => (
                            <Skeleton key={idx} h={'100%'}>
                                <GalleryFieldItem key={idx} episode={{ name: 'name', episode: 'episode', id: idx }} />
                            </Skeleton>
                        ))}
                    </>
                ) : (
                    <>
                        {Array.isArray(data) ? (
                            data.map((episode) => <GalleryFieldItem key={episode.id} episode={episode} />)
                        ) : (
                            <GalleryFieldItem episode={data as IEpisode} />
                        )}
                    </>
                )}
            </Flex>
        </Box>
    )
}
