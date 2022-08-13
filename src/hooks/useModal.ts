import { useState } from 'react'

export const useModal = (): [boolean, () => void] => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleSetIsOen = () => void setIsOpen(!isOpen)

    return [isOpen, handleSetIsOen]
}
