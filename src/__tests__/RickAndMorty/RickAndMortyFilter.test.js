import { modalDelay, renderWithProviders } from './utils/test-utils'
import RickAndMortyFilter from '../../components/RickAndMorty/RickAndMortyFilter/RickAndMortyFilter'
import { findByRole, fireEvent, waitFor } from '@testing-library/react'
import RickAndMortyFilterModal from '../../components/RickAndMorty/RickAndMortyFilter/RickAndMortyFilterModal'
import '@testing-library/jest-dom'
import { configureStore } from '@reduxjs/toolkit'
import { setupStore } from '../../store'

describe('RickAndMortyFilter', () => {
    it('Open and close filter modal', () => {
        const {getByText, getByRole, findByRole} = renderWithProviders(<RickAndMortyFilter/>)
        const buttonOpen = getByText('Filters')
        fireEvent.click(buttonOpen)
        waitFor(() => expect(getByRole('dialog')).toBeInTheDocument(), {
            timeout: modalDelay
        })

        const closeButton = getByText('Close')

        fireEvent.click(closeButton)

        waitFor(() => expect(getByRole('dialog')).not.toBeInTheDocument(), {
            timeout: modalDelay
        })
    })

    it('Filter options: set input value and select different radios', async () => {
        const mockHandleFunc = jest.fn()
        const {getByLabelText, getByText} = renderWithProviders(<RickAndMortyFilterModal isOpen={true} handleSetIsOpen={mockHandleFunc}/> )

        const input = getByLabelText('character name')
        fireEvent.change(input, {target: {value: 'rick'}})

        expect(input.value).toBe('rick')

        const status = getByLabelText('Alive')
        const gender = getByLabelText('Genderless')
        const species = getByLabelText('Alien')

        fireEvent.change(status, {target: {value: 'dead'}})
        fireEvent.change(gender, {target: {value: 'female'}})
        fireEvent.change(species, {target: {value: 'human'}})

        expect(status.value).toBe('dead')
        expect(gender.value).toBe('female')
        expect(species.value).toBe('human')

        fireEvent.click(getByText('Close'))
    })
})