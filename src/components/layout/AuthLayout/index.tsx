import React from 'react';
import Meta from '../meta';

interface AuthLayoutProps {
    children?: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
    return (
        <>
            <Meta title="Ramped" description="Rampedcareers" />
            {children}
        </>
    );
};

export default React.memo(AuthLayout);
