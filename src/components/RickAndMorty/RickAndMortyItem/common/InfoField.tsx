import { Box, VStack } from '@chakra-ui/react'
import { FC } from 'react'

type InfoFieldProps = {
    text: string
    value: string
}

export const InfoField: FC<InfoFieldProps> = ({ text, value }) => {
    return (
        <VStack spacing="0" alignItems={'flex-start'}>
            <Box fontWeight={'700'}>{text}</Box>
            <Box>{value}</Box>
        </VStack>
    )
}
