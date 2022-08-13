export const getEpisodesId = (episodes: string[]): string => {
    return episodes.map((url) => url.split('/').slice(-1).join('')).join(', ')
}
