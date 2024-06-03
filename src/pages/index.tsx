import React from 'react';

import { useReduxLoading } from '@redux';
import Loader from '@components/ui/loader/loader';
import ComingSoonPage from '@components/common/coming-soon';

const Dashboard = () => {
    if (useReduxLoading()) {
        return <Loader />;
    }

    return (
        <>
            <ComingSoonPage />
        </>
    );
};

export default Dashboard;
