import { fireEvent, waitFor } from '@testing-library/react'
import { modalDelay, renderWithProviders } from '../../../utils/testUtils'
import RickAndMortyFilter from './RickAndMortyFilter'
import RickAndMortyFilterModal from './RickAndMortyFilterModal'
import '@testing-library/jest-dom'

test('Open and close filter modal', () => {
    const { getByText, getByRole } = renderWithProviders(<RickAndMortyFilter />)
    const buttonOpen = getByText('Filters')
    fireEvent.click(buttonOpen)
    waitFor(() => expect(getByRole('dialog')).toBeInTheDocument(), {
        timeout: modalDelay,
    })

    const closeButton = getByText('Close')

    fireEvent.click(closeButton)

    waitFor(() => expect(getByRole('dialog')).not.toBeInTheDocument(), {
        timeout: modalDelay,
    })
})

test('Filter options: set input value and select different radios', async () => {
    const mockHandleFunc = jest.fn()
    const { getByLabelText, getByText } = renderWithProviders(
        <RickAndMortyFilterModal isOpen={true} handleSetIsOpen={mockHandleFunc} />
    )

    const input = getByLabelText('character name') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'rick' } })

    expect(input.value).toBe('rick')

    const status = getByLabelText('Alive') as HTMLInputElement
    const gender = getByLabelText('Genderless') as HTMLInputElement
    const species = getByLabelText('Alien') as HTMLInputElement

    fireEvent.change(status, { target: { value: 'dead' } })
    fireEvent.change(gender, { target: { value: 'female' } })
    fireEvent.change(species, { target: { value: 'human' } })

    expect(status.value).toBe('dead')
    expect(gender.value).toBe('female')
    expect(species.value).toBe('human')

    fireEvent.click(getByText('Close'))
})
