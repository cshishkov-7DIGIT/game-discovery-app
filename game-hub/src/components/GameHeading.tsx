import {Heading} from '@chakra-ui/react';
import {GameQuery} from '../models/GameQuery';
import {useTranslation} from 'react-i18next';

interface Props {
    gameQuery: GameQuery;
}

const GameHeading = ({gameQuery}: Props) => {
    const {t} = useTranslation();

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre ? t(gameQuery.genre.name) : ''} ${t('Games')}`;

    return (
        <Heading as="h1" marginY={5} fontSize="5xl">{heading}</Heading>
    );
};

export default GameHeading;