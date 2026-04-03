import axios from 'axios';

/**
 * Este arquivo foi migrado da API da Marvel para a Comic Vine.
 * O nome "marvel.ts" foi mantido para evitar alterações excessivas nos componentes e hooks.
 */
const API_KEY = import.meta.env.VITE_COMIC_VINE_KEY;

// Usando o proxy configurado no vite.config.ts para evitar CORS
const comicVineApi = axios.create({
    baseURL: '/api/comicvine',
    params: {
        api_key: API_KEY,
        format: 'json',
    }
});

const getTitle = (issue: any) => {
    if (issue.name) {
        return `${issue.volume.name} ${issue.name}`;
    }
    return `${issue.volume.name} Vol. ${issue.issue_number}`
}

// Mapper para converter a resposta da Comic Vine para o formato esperado pelo app
const mapComicVineToMarvel = (issue: any) => ({
    id: issue.id,
    title: getTitle(issue),
    pageCount: 0, // Comic Vine não fornece contagem de páginas de forma simples
    textObjects: [
        {
            text: issue.deck || issue.description || 'No description available.'
        }
    ],
    thumbnail: {
        path: issue.image?.original_url?.replace(/\.[^/.]+$/, "") || '',
        extension: issue.image?.original_url?.split('.').pop() || ''
    },
    prices: [
        {
            type: 'printPrice',
            price: Math.floor(Math.random() * 100) + 10
        }
    ],
    creators: {
        items: (issue.person_credits || []).map((person: any) => ({
            name: person.name,
            role: person.role || 'Writer/Artist'
        }))
    }
});

export const getComics = async (offset = 0, limit = 100) => {
    // Comic Vine usa 'limit' e 'offset'. O '/' no final é crucial para evitar redirecionamento 301 que causa erro de CORS.
    const response = await comicVineApi.get('/issues/', {
        headers: {
            'Cache-Control': 'no-store'
        },
        params: {
            offset,
            limit,
            sort: 'store_date:desc'
        }
    });

    // Envolver os resultados no formato data.data.results esperado pelo hook
    return {
        data: {
            data: {
                results: response.data.results.map(mapComicVineToMarvel)
            }
        }
    };
};
