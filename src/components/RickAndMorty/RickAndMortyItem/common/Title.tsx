import { Heading } from '@chakra-ui/react'
import { FC } from 'react'

type TitleProps = {
    title: string
}

export const Title: FC<TitleProps> = ({ title }) => {
    return (
        <Heading as="h3" size="lg" noOfLines={2}>
            {title}
        </Heading>
    )
}
