import { Heading } from '@chakra-ui/react'
import { FC } from 'react'

type TitleProps = {
    title: string
}

const Title: FC<TitleProps> = ({ title }) => {
    return (
        <Heading as="h3" size="lg">
            {title}
        </Heading>
    )
}

export default Title
