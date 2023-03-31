import {GameQuery} from '../models/GameQuery';
import {useQuery} from 'react-query';
import {Game} from '../models/Games';
import apiClient from '../utils/api-client';

const useGamesByQuery = (gameQuery: GameQuery) => {
    const {data = [], isLoading, error} = useQuery<Game[], Error>(
        ['gamesByQuery', gameQuery],
        async () => {
            const params: Record<string, any> = {};
            if (gameQuery.genre) {
                params.genres = gameQuery.genre.id;
            }
            if (gameQuery.platform) {
                params.platforms = gameQuery.platform.id;
            }
            if (gameQuery.sortOrder) {
                params.ordering = gameQuery.sortOrder;
            }
            if (gameQuery.searchText) {
                params.search = gameQuery.searchText;
            }
            const response = await apiClient.get<Game[]>('/games', {params});
            return response.data;
        },
    );

    return {data, isLoading, error};
};

export default useGamesByQuery;