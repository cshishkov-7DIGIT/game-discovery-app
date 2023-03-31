import {useQuery} from 'react-query';
import {Genre} from '../models/Genre';
import apiClient from '../utils/api-client';

const useAllGenres = () => {
    const {data = [], isLoading, error} = useQuery<Genre[], Error>(
        'allGenres',
        async () => {
            const response = await apiClient.get<{ results: Genre[] }>('/genres');
            return response.data.results;
        },
    );

    return {data, isLoading, error};
};

export default useAllGenres;
