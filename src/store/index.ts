import { configureStore } from '@reduxjs/toolkit'
import { rickAndMortyApi } from './rickAndMorty/rickAndMortyApi'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(rickAndMortyApi.middleware),
})

setupListeners(store.dispatch)
