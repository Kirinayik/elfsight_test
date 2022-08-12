import {Box, Heading, HStack, Image, VStack} from "@chakra-ui/react";
import {FC, useEffect, useState} from "react";
import {ICharacter, IEpisode} from "../../types/types";
import {ItemContainer, ItemHover, ItemStatus} from "./RickAndMorty.styles";
import axios from "axios";

type RickAndMortyItemProps = {
    character: ICharacter
}

const RickAndMortyItem:FC<RickAndMortyItemProps> = ({character: {image, location, name, status, species, episode}}) => {
    const [firstEpisode, setFirstEpisode] = useState<IEpisode>({
        name: ''
    })

    useEffect(() => {
        (async() => {
           const {data} = await axios.get(episode[0])
            setFirstEpisode(data)
        })()
    }, [])

    return (
        <ItemContainer>
            <Image src={image} alt={name}/>
            <ItemHover>
                <VStack spacing='10px' alignItems={'flex-start'}>
                    <Heading as='h3' size='lg'>{name}</Heading>
                    <HStack spacing='10px' fontWeight={'700'}>
                        <ItemStatus status={status}>{status}</ItemStatus>
                        <Box>-</Box>
                        <Box>{species}</Box>
                    </HStack>
                    <VStack spacing='0' alignItems={'flex-start'}>
                        <Box fontWeight={'700'}>Last known location:</Box>
                        <Box>{location.name}</Box>
                    </VStack>
                    <VStack spacing='0' alignItems={'flex-start'}>
                        <Box fontWeight={'700'}>First seen in:</Box>
                        <Box>{firstEpisode.name}</Box>
                    </VStack>
                </VStack>
            </ItemHover>
        </ItemContainer>
    );
};

export default RickAndMortyItem;