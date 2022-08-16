import { configureStore } from '@reduxjs/toolkit'
import { rickAndMortyApi } from './rickAndMorty/rickAndMortyApi'
import rickAndMortyReducer from './rickAndMorty/rickAndMortyState'
import { setupListeners } from '@reduxjs/toolkit/query'

export const store = configureStore({
    reducer: {
        rickAndMorty: rickAndMortyReducer,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(rickAndMortyApi.middleware),
})

setupListeners(store.dispatch)
