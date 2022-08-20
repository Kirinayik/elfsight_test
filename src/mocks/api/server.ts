import { setupServer } from 'msw/node'
import { rest } from 'msw'
import { characters } from '../characters'

const handlers = [
    rest.get('https://rickandmortyapi.com/api/episode/:id', (req, res, ctx) => {
        return res(
            ctx.json({
                id: 1,
                name: 'Pilot',
                air_date: 'December 2, 2013',
                episode: 'S01E01',
                characters: ['https://rickandmortyapi.com/api/character/1'],
                url: 'https://rickandmortyapi.com/api/episode/1',
                created: '2017-11-10T12:56:33.798Z',
            })
        )
    }),
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(
            ctx.json({
                info: {
                    count: 20,
                    pages: 2,
                    next: null,
                    prev: null,
                },
                results: characters,
            })
        )
    }),
]

export const server = setupServer(...handlers)
