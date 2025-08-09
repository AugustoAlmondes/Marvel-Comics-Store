export const comics = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    title: `Amazing Spider-Man Vol.${i + 1}`,
    thumbnail: {
        path: './comic1',
        extension: 'jpg'
    },
    prices: [{ type: 'printPrice', price: 3.99 + (i * 0.5) }],
    issueNumber: i + 1
}));