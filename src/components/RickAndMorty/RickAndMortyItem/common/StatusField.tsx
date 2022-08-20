import { ItemStatus } from '../../RickAndMorty.styles'
import { Box, HStack } from '@chakra-ui/react'
import { FC } from 'react'
import { IStatus } from '@global/types'

type StatusFieldProps = {
    status: IStatus
    species: string
}

export const StatusField: FC<StatusFieldProps> = ({ status, species }) => {
    return (
        <HStack spacing="10px" fontWeight={'700'}>
            <ItemStatus status={status}>{status}</ItemStatus>
            <Box>-</Box>
            <Box>{species}</Box>
        </HStack>
    )
}
