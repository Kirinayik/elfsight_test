import { Radio, RadioGroup, Stack } from '@chakra-ui/react'
import { Dispatch, FC } from 'react'
import { Action } from '../../../../types/types'

type RadioFilterProps = {
    radios: { value: string; name: string }[]
    type: 'status' | 'gender' | 'species'
    value: string
    dispatch: Dispatch<Action>
}

const RadioFilter: FC<RadioFilterProps> = ({ value, dispatch, radios, type }) => {
    const handleOnChange = (e: string) => {
        dispatch({ type, payload: e })
    }

    return (
        <RadioGroup onChange={handleOnChange} value={value}>
            <Stack direction="row" gap={'15px'}>
                {radios.map(({ value: radioValue, name }) => (
                    <Radio key={radioValue} value={radioValue}>
                        {name}
                    </Radio>
                ))}
            </Stack>
        </RadioGroup>
    )
}

export default RadioFilter
