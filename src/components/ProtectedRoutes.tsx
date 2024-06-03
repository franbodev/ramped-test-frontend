import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { AppState } from '@redux';
import { Router } from 'next/router';
import Loader from './ui/loader/loader';

const AuthLayout = dynamic(() => import('./layout/AuthLayout'));
const MainLayout = dynamic(() => import('@components/layout/mainLayout'));
const Meta = dynamic(() => import('@components/layout/meta'));

//check if you are on the client (browser) or server
const isBrowser = () => typeof window !== 'undefined';

const unprotectedRoutes = ['/login', '/signup']; //router.pathname

export interface ProtectedRouteProps {
    router: Router;
    children: React.ReactNode;
}

const ProtectedRoute = ({ router, children }: ProtectedRouteProps) => {
    //Identify authenticated user
    const auth = useSelector((state: AppState) => state.auth);
    console.log(auth);
    const isAuthenticated = useMemo(() => (auth.data?.access_token ? auth.data.access_token : null), [auth.data]);

    console.log('isauthentiated:', isAuthenticated);
    /**
     * @var pathIsProtected Checks if path exists in the unprotectedRoutes routes array
     */
    const pathIsProtected = useMemo(() => unprotectedRoutes.indexOf(router.pathname) === -1, [router.pathname]);

    const isHomeRouter = useMemo(() => router.pathname === '/', [router.pathname]);

    useEffect(() => {
        if (isBrowser() && !isAuthenticated && pathIsProtected) {
            router.push('/login', undefined, { shallow: true });
        } else if (isBrowser() && isAuthenticated && !pathIsProtected) {
            router.push('/jobs', undefined, { shallow: true });
        } else if (isBrowser() && isAuthenticated && isHomeRouter) {
            router.push('/jobs', undefined, { shallow: true });
        }
    }, [isAuthenticated, pathIsProtected, isHomeRouter]);

    return (
        <>
            {isAuthenticated && pathIsProtected && (
                <MainLayout meta={<Meta title="Ramped" description="Rampedcareers" />}>{children} </MainLayout>
            )}
            {!isAuthenticated && !pathIsProtected && <AuthLayout>{children}</AuthLayout>}
            <Loader isLoading={(!isAuthenticated && !!pathIsProtected) || (!!isAuthenticated && !pathIsProtected)} />
        </>
    );
};

export default React.memo(ProtectedRoute);
