import { useMemo } from 'react'

export const useFilterRadios = () => {
    const statusRadios = useMemo(
        () => [
            { value: 'alive', name: 'Alive' },
            { value: 'dead', name: 'Dead' },
            { value: 'unknown', name: 'Unknown' },
            { value: 'all', name: 'All' },
        ],
        []
    )
    const genderRadios = useMemo(
        () => [
            { value: 'female', name: 'Female' },
            { value: 'male', name: 'Male' },
            { value: 'genderless', name: 'Genderless' },
            { value: 'unknown', name: 'Unknown' },
            { value: 'all', name: 'All' },
        ],
        []
    )
    const speciesRadios = useMemo(
        () => [
            { value: 'human', name: 'Human' },
            { value: 'alien', name: 'Alien' },
            { value: 'all', name: 'All' },
        ],
        []
    )

    return { statusRadios, genderRadios, speciesRadios }
}
