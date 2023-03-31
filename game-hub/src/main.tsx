import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import {QueryClient, QueryClientProvider} from 'react-query';
import theme from './theme';
import {ChakraProvider, ColorModeScript} from '@chakra-ui/react';
import {ReactQueryDevtools} from 'react-query/devtools';
import i18n from './i18n';
import {I18nextProvider} from 'react-i18next';


const queryClient = new QueryClient();


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ChakraProvider theme={theme}>
                <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
                <I18nextProvider i18n={i18n}>
                    <App/>
                </I18nextProvider>
            </ChakraProvider>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    </React.StrictMode>,
);
