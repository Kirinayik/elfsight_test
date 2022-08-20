import { createRoot } from 'react-dom/client'
import { App } from './App'
import { setupStore } from './store'
import { disableReactDevTools } from '@fvilers/disable-react-devtools'
import { setupListeners } from '@reduxjs/toolkit/query'
import { Providers } from '@utils/Providers'

if (process.env.NODE_ENV === 'production') {
    disableReactDevTools()
}

const store = setupStore({})
setupListeners(store.dispatch)

const root = createRoot(document.getElementById('root') as HTMLDivElement)
root.render(
    <Providers store={store}>
        <App />
    </Providers>
)
