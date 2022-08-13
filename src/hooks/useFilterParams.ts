import { useState } from 'react'

export const useFilterParams = () => {
    const [name, setName] = useState<string>('')
    const [status, setStatus] = useState<string>('all')
    const [gender, setGender] = useState<string>('all')
    const [species, setSpecies] = useState<string>('all')

    const handleSetName = (e:any) => void setName(e.target.value)

    return {name,
        status,
        gender,
        species,setStatus, setGender, setSpecies, handleSetName}
}