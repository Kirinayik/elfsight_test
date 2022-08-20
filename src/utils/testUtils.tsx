import { render, RenderOptions } from '@testing-library/react'
import { setupStore } from '@store/index'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { FC, ReactElement } from 'react'
import { PreloadedState } from '@reduxjs/toolkit'
import { AppStore, RootState } from '@global/types'
import { Providers } from '@utils/Providers'

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
        return <Providers store={store}>{children}</Providers>
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

export const modalDelay = 1000
