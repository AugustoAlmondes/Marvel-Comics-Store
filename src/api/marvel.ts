import axios from 'axios';
import md5 from 'md5';

const API_PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
const API_PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

const marvelApi = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
});

export const getComics = async (offset = 0, limit = 40) => {
    const ts = Date.now().toString();
    const hash = md5(ts + API_PRIVATE_KEY + API_PUBLIC_KEY);

    return marvelApi.get('/comics', {
        params: {
            ts,
            apikey: API_PUBLIC_KEY,
            hash,
            offset,
            limit,
            orderBy: '-focDate'
        }
    });
};

