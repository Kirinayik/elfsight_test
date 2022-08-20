import { createRoot } from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './assets/styles/theme'
import App from './App'
import { Provider } from 'react-redux'
import { setupStore } from './store'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { setupListeners } from '@reduxjs/toolkit/query'

if (process.env.NODE_ENV === 'production') {
    disableReactDevTools()
}

const store = setupStore({})
setupListeners(store.dispatch)

const root = createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </Provider>
)
