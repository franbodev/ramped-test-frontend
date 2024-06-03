import React from 'react';
import { Provider } from 'react-redux';
import { AppProps } from 'next/app';
import createStore from '@redux/createStore';
import dynamic from 'next/dynamic';

const PersistGate = dynamic(() => import('redux-persist/integration/react').then(({ PersistGate }) => PersistGate));
const ToastContainer = dynamic(() => import('react-toastify').then(({ ToastContainer }) => ToastContainer));
const UIProvider = dynamic(() => import('@contexts/ui.context').then(({ UIProvider }) => UIProvider));
const ProtectedRoutes = dynamic(() => import('../components/ProtectedRoutes'));

import '../assets/main.css';
import 'react-toastify/dist/ReactToastify.css';

const { store, persistor } = createStore(undefined, undefined);

const SnackContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            {children}
        </>
    );
};

const MyApp = ({ Component, pageProps, router }: AppProps) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <UIProvider>
                <SnackContainer>
                    <ProtectedRoutes router={router}>
                        <Component {...pageProps} />
                    </ProtectedRoutes>
                </SnackContainer>
            </UIProvider>
        </PersistGate>
    </Provider>
);
export default MyApp;
