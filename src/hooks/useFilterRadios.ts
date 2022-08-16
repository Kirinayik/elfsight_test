import { useMemo } from 'react'

export const useFilterRadios = () => {
    const statusRadios = [
            { value: 'alive', name: 'Alive' },
            { value: 'dead', name: 'Dead' },
            { value: 'unknown', name: 'Unknown' },
            { value: 'all', name: 'All' },
        ]
    const genderRadios = [
            { value: 'female', name: 'Female' },
            { value: 'male', name: 'Male' },
            { value: 'genderless', name: 'Genderless' },
            { value: 'unknown', name: 'Unknown' },
            { value: 'all', name: 'All' },
        ]
    const speciesRadios = [
            { value: 'human', name: 'Human' },
            { value: 'alien', name: 'Alien' },
            { value: 'all', name: 'All' },
        ]

    return useMemo(() => ({ statusRadios, genderRadios, speciesRadios }), [])
}
