import { Provider } from 'react-redux'
import { render, RenderOptions } from '@testing-library/react'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../assets/styles/theme'
import { setupStore } from '../store'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { FC, ReactElement } from 'react'
import { PreloadedState } from '@reduxjs/toolkit'
import { AppStore, RootState } from '../types/types'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: PreloadedState<RootState>
    store?: AppStore
}

export const renderWithProviders = (
    ui: ReactElement,
    { preloadedState = {}, store = setupStore(preloadedState), ...renderOptions }: ExtendedRenderOptions = {}
) => {
    setupListeners(store.dispatch)

    const Wrapper: FC<{ children: JSX.Element }> = ({ children }) => {
        return (
            <Provider store={store}>
                <ChakraProvider theme={theme}>{children}</ChakraProvider>
            </Provider>
        )
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const modalDelay = 1000
