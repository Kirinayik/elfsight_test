import { FC } from 'react'
import { Box, Flex, Skeleton } from '@chakra-ui/react'
import { useEpisodesQuery } from '../../../../store/rickAndMorty/rickAndMortyApi'
import { getEpisodesId } from '../../../../utils/getEpisodesId'
import GalleryFieldItem from './GalleryFieldItem'

type GalleryFieldProps = {
    gallery: string[]
    title: string
}

const GalleryField: FC<GalleryFieldProps> = ({ title, gallery }) => {
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
                                <GalleryFieldItem key={idx} name={'name'} episode={'episode'} />
                            </Skeleton>
                        ))}
                    </>
                ) : (
                    <>
                        {data &&
                            (Array.isArray(data) ? (
                                data.map(({ id, name, episode }) => (
                                    <GalleryFieldItem key={id} name={name} episode={episode} />
                                ))
                            ) : (
                                <GalleryFieldItem name={data.name} episode={data.episode} />
                            ))}
                    </>
                )}
            </Flex>
        </Box>
    )
}

export default GalleryField
