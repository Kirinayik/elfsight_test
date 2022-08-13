import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { FC } from 'react'

type RadioFilterProps = {
    radios: {value:string; name: string}[]
    currentValue: string
    setValue: (prevValue: string) => void
}

const RadioFilter:FC<RadioFilterProps> = ({radios, setValue, currentValue}) => {
    return (
        <RadioGroup onChange={setValue} value={currentValue}>
            <Stack direction='row' gap={'15px'}>
                {radios.map(({value, name}) => (
                    <Radio key={value} value={value}>{name}</Radio>
                ))}
            </Stack>
        </RadioGroup>
    )
}

export default RadioFilter