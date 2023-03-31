import {Input, InputGroup, InputLeftElement} from '@chakra-ui/react';
import {useRef} from 'react';
import {BsSearch} from 'react-icons/bs';
import { useTranslation } from 'react-i18next';

interface Props {
    onSearch: (searchText: string) => void;
}

const SearchInput = ({onSearch}: Props) => {
    const ref = useRef<HTMLInputElement>(null);
    const { t } = useTranslation();

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (ref.current) onSearch(ref.current.value);
        }}>
            <InputGroup>
                <InputLeftElement children={<BsSearch/>}/>
                <Input
                    ref={ref}
                    borderRadius={20}
                    placeholder={t('Search games...') ?? ''}
                    variant="filled"
                />
            </InputGroup>
        </form>
    );
};

export default SearchInput;
