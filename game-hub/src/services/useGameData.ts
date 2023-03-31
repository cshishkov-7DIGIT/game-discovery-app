import {useQuery} from 'react-query';
import {Game} from '../models/Games';
import apiClient from '../utils/api-client';

const useGameData = () => {
    const {data = [], isLoading, error} = useQuery<Game[], Error>(
        'gameData',
        async () => {
            const response = await apiClient.get<Game[]>('/games');
            return response.data;
        },
    );

    return {data, isLoading, error};
};

export default useGameData;