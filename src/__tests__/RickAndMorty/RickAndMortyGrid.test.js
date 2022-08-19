import 'whatwg-fetch'
import '@testing-library/jest-dom'
import { modalDelay, renderWithProviders } from './utils/test-utils'
import RickAndMortyGrid from '../../components/RickAndMorty/RickAndMortyGrid/RickAndMortyGrid'
import { fireEvent, getByLabelText, getByText, waitFor } from '@testing-library/react'
import { setupStore } from '../../store'

describe('RickAndMortyGrid', () => {
    it('Fetch and show characters list on mount', async() => {
        const {getByTestId} = renderWithProviders(<RickAndMortyGrid/> )
        const spinner = getByTestId('spinner')
        expect(spinner).toBeInTheDocument()

        await waitFor(() => expect(getByTestId('characters-list').childElementCount).toBe(20))

        expect(spinner).not.toBeInTheDocument()
    })

    it('Open and close character modal on click', async () => {
        const {getByTestId, getByRole, getByLabelText, debug, queryByRole} = renderWithProviders(<RickAndMortyGrid/>)

        await waitFor(() => expect(getByTestId('characters-list').childElementCount).toBe(20))

        const item = getByTestId('characters-list').querySelector('div')

        fireEvent.click(item)

        await waitFor(() => expect(getByRole('dialog')).toBeInTheDocument(), {
            timeout: modalDelay
        })

        const close = getByLabelText('Close')

        fireEvent.click(close)

        await waitFor(() => expect(queryByRole('dialog')).not.toBeInTheDocument(), {
            timeout: modalDelay
        })
    })

    // it('Fetch more on load more button click', async () => {
    //     const {getByTestId, getByText, getByRole, getByLabelText, debug, queryByRole} = renderWithProviders(<RickAndMortyGrid/>)
    //
    //     await waitFor(() => expect(getByTestId('characters-list').childElementCount).toBe(20))
    //
    // const loadMore = getByText('Load more')
    // })
})