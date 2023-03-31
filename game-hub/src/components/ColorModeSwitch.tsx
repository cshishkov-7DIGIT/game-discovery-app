import {HStack, Switch, Text, useColorMode} from '@chakra-ui/react';
import {useTranslation} from 'react-i18next';

const ColorModeSwitch = () => {
    const {toggleColorMode, colorMode} = useColorMode();
    const {t} = useTranslation('translation');


    return (
        <HStack>
            <Switch colorScheme="green" isChecked={colorMode === 'dark'} onChange={toggleColorMode}/>
            <Text whiteSpace="nowrap">{t('Dark Mode')}</Text>
        </HStack>
    );
};

export default ColorModeSwitch;