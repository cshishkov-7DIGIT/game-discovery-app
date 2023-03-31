import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import {useTranslation} from 'react-i18next';

interface Props {
    onSelectSortOrder: (sortOrder: string) => void;
    sortOrder: string;
}

const SortSelector = ({onSelectSortOrder, sortOrder}: Props) => {
    const {t} = useTranslation();


    const sortOrders = [
        {value: '', label: t('Relevance')},
        {value: '-added', label: t('Date added')},
        {value: 'name', label: t('Name')},
        {value: '-released', label: t('Release date')},
        {value: '-metacritic', label: t('Popularity')},
        {value: '-rating', label: t('Average rating')},
    ];

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {t('Order by:')} {currentSortOrder?.label || t('Relevance')}
            </MenuButton>
            <MenuList>
                {sortOrders.map((order) => (
                    <MenuItem onClick={() => onSelectSortOrder(order.value)} key={order.value} value={order.value}>
                        {order.label}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default SortSelector;
