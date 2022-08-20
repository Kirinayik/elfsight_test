import 'whatwg-fetch'
import '@testing-library/jest-dom'
import { act, fireEvent, waitFor } from '@testing-library/react'
import { modalDelay, renderWithProviders } from '@utils/testUtils'
import { RickAndMortyGrid } from './RickAndMortyGrid'
import { updateCharacters } from '@store/rickAndMorty/rickAndMortyState'
import { characters } from '@mocks/characters'
import { setupStore } from '@store/index'

test('Fetch and show characters list on mount', async () => {
    const { getByTestId } = renderWithProviders(<RickAndMortyGrid />)
    const spinner = getByTestId('spinner')
    expect(spinner).toBeInTheDocument()

    await waitFor(() => expect(getByTestId('characters-list').childElementCount).toBe(20))

    expect(spinner).not.toBeInTheDocument()
})

test('Open and close character modal on click', async () => {
    const { getByTestId, getByRole, getByLabelText, queryByRole } = renderWithProviders(<RickAndMortyGrid />)

    await waitFor(() => expect(getByTestId('characters-list').childElementCount).toBe(20))

    const item = getByTestId('characters-list').querySelector('div') as HTMLDivElement

    fireEvent.click(item)

    await waitFor(() => expect(getByRole('dialog')).toBeInTheDocument(), {
        timeout: modalDelay,
    })

    const close = getByLabelText('Close')

    fireEvent.click(close)

    await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument(), {
        timeout: modalDelay,
    })
})

test('Fetch more on load more button click', async () => {
    const store = setupStore()
    const { findByText, getByTestId } = renderWithProviders(<RickAndMortyGrid />, { store })

    const loadMore = await findByText('Load more')
    fireEvent.click(loadMore)
    act(() => {
        store.dispatch(updateCharacters(characters.map((el) => ({ ...el, id: el.id + 20 }))))
    })

    await waitFor(() => expect(getByTestId('characters-list').childElementCount).toBe(40))
})
