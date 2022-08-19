import { Provider } from 'react-redux'
import { render } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../../../assets/styles/theme'
import { setupStore } from '../../../store'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const renderWithProviders = (
    ui,
    {
        preloadedState = {},
        store = setupStore(preloadedState),
        ...renderOptions
    } = {}
) => {
    setupListeners(store.dispatch)

    const Wrapper = ({ children }) => {
        return <Provider store={store}>
            <ChakraProvider theme={theme}>
                {children}
            </ChakraProvider>
        </Provider>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const modalDelay = 1000