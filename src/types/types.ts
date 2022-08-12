export interface ICharacter {
    image: string
    id: string
    name: string
    status: 'Alive' | 'Dead' | 'unknown'
    species: string
    episode: string[]
    location: {
        name: string
    }
}

export interface IEpisode {
    name: string
}