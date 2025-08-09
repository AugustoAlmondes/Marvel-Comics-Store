export interface ComicCard {
    comic: {
        id: number;
        title: string;
        thumbnail: {
            path: string;
            extension: string;
        };
        prices: {
            type: string;
            price: number;
        }[];
        issueNumber?: number;
        isRare?: boolean;
    };
}
