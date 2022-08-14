import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IRickAndMortyResponse } from '../../types/types'

export const rickAndMortyApi = createApi({
    reducerPath: 'rickAndMortyApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
    endpoints: (builder) => ({
        characters: builder.query<IRickAndMortyResponse, string>({
            query: (params) => `/character${params}`,
        }),
        episodes: builder.query({
            query: (query) => `/episode/${query}`,
        }),
    }),
})

export const { useCharactersQuery, useEpisodesQuery } = rickAndMortyApi
