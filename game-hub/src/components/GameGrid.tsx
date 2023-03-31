import {SimpleGrid, Text} from '@chakra-ui/react';
import GameCard from './GameCard';
import React from 'react';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import {Game} from '../models/Games';
import {GameQuery} from '../models/GameQuery';
import useGamesByQuery from '../services/useGamesByQuery';


interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({gameQuery}: Props) => {
    const allGamesByQuery = useGamesByQuery(gameQuery);
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (allGamesByQuery.isLoading) return <Text>{allGamesByQuery.error?.message}</Text>;

    return (
        <SimpleGrid
            columns={{sm: 1, md: 2, lg: 3, xl: 4}}
            padding="10px"
            spacing={6}
        >
            {allGamesByQuery.isLoading &&
                skeletons.map((skeleton) => (
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton/>
                    </GameCardContainer>
                ))}
            {allGamesByQuery.data?.results?.map((game: Game) => (
                <GameCardContainer key={game.id}>
                    <GameCard game={game}/>
                </GameCardContainer>
            ))}
        </SimpleGrid>
    );
};

export default GameGrid;
