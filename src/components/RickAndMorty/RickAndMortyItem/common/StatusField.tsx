import { ItemStatus } from '../../RickAndMorty.styles'
import { Box, HStack } from '@chakra-ui/react'
import { FC } from 'react'
import { IStatus } from '../../../../types/types'

type StatusFieldProps = {
    status: IStatus
    species: string
}

const StatusField: FC<StatusFieldProps> = ({ status, species }) => {
    return (
        <HStack spacing="10px" fontWeight={'700'}>
            <ItemStatus status={status}>{status}</ItemStatus>
            <Box>-</Box>
            <Box>{species}</Box>
        </HStack>
    )
}

export default StatusField
