import {Button, Menu, MenuButton, MenuItem, MenuList} from '@chakra-ui/react';
import {BsChevronDown} from 'react-icons/bs';
import {Platform} from '../models/Platform';
import {useTranslation} from 'react-i18next';

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {
    const {t} = useTranslation();

    const platforms = [
        {id: 1, name: t('PC'), slug: 'pc'},
        {id: 2, name: t('PlayStation'), slug: 'playstation'},
        {id: 3, name: t('Xbox'), slug: 'xbox'},
        {id: 4, name: t('Nintendo'), slug: 'nintendo'},
        {id: 5, name: t('Mac'), slug: 'mac'},
        {id: 6, name: t('Linux'), slug: 'linux'},
        {id: 7, name: t('Android'), slug: 'android'},
        {id: 8, name: t('iOS'), slug: 'ios'},
        {id: 9, name: t('Web'), slug: 'web'},
    ];

    const currentPlatform = platforms.find(
        (platform) => platform.slug === selectedPlatform?.slug,
    );

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {t('Platform')}: {currentPlatform?.name || t('All')}
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => onSelectPlatform(null)}>
                    {t('All')}
                </MenuItem>
                {platforms.map((platform) => (
                    <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id} value={platform.id}>
                        {platform.name}
                    </MenuItem>
                ))}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
