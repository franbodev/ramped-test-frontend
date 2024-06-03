import Header from '@components/layout/Header';
import MobileNavigation from '@components/layout/navigation/mobile-navigation';
import React, { Fragment, ReactNode } from 'react';
import SidebarItem from '@components/layout/navigation/sidebar-item';
import Logo from '@components/ui/logo';

import Loader from '@components/ui/loader/loader';
import { useRedux } from '@redux/index';

const sideBar = [
    {
        href: '/jobs',
        label: 'Job List',
        icon: 'JobsIcon',
    },
];

type IMainProps = {
    meta: ReactNode;
    children?: ReactNode;
};

const MainLayout = ({ children, meta }: IMainProps) => {
    const auth = useRedux('auth');

    if (auth.isLoading) {
        return <Loader />;
    }

    const SidebarItemMap = () => (
        <Fragment>
            {sideBar.map(({ href, label, icon }, index: number) => (
                <SidebarItem href={href} label={label} icon={icon} key={index} />
            ))}
        </Fragment>
    );

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col transition-colors duration-150">
            {meta}
            <Header />
            <MobileNavigation>
                <SidebarItemMap />
            </MobileNavigation>

            <div className="flex flex-1 pt-20 main-layout">
                <aside className="shadow w-96 xl:w-100 hidden lg:block overflow-y-auto bg-side-gradient z-10 fixed start-0 bottom-0 h-full pt-2">
                    <div className="hidden md:flex py-1.5 border-b-2 border-gray-400 mx-6">
                        <Logo />
                    </div>
                    <div className="flex flex-col pt-3">
                        <SidebarItemMap />
                    </div>
                </aside>
                <main className="w-full lg:ps-96 xl:ps-100 bg-light-gray -mt-2">
                    <div className="h-full">{children}</div>
                </main>
            </div>
        </div>
    );
};
export default React.memo(MainLayout);
