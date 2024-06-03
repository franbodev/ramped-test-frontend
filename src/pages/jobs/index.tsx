import React, { useState, useMemo } from 'react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('@components/common/card'));
const Input = dynamic(() => import('@components/ui/input'));
const SearchIcon = dynamic(() => import('@components/icons/search-icon').then(({ SearchIcon }) => SearchIcon));

import cls from './jobs.module.scss';

const JobsTable = dynamic(() => import('@components/widgets/jobs-table'));

const Jobs = () => {
    const [tmpSearchText, setTmpSearchText] = useState<string>('');
    const [searchText, setSearchText] = useState<string>('');

    const searchParams = useMemo((): IJob.QueryParams => {
        return {
            job_name: searchText,
        };
    }, [searchText]);

    return (
        <>
            <Card className="bg-white !p-4 md:!px-10 !pt-1 !pb-5">
                <div className="flex flex-row justify-between items-center">
                    <h3 className="w-full text-lg md:text-2xl font-medium text-blue-400">Job List</h3>
                </div>
            </Card>
            <>
                <div className="py-7 px-4 md:px-10">
                    <div className="flex flex-row flex-wrap gap-y-4 gap-x-8 items-center">
                        <Input
                            className="flex-grow"
                            placeholder="Fuzzy search by job title"
                            name="serviceKey"
                            rightIcon={<SearchIcon width={'20px'} height={'20px'} />}
                            variant="outline"
                            onChange={(e) => setTmpSearchText(e?.target?.value ?? '')}
                            onBlur={() => setSearchText(tmpSearchText)}
                            onKeyDown={(e) => e.key === 'Enter' && setSearchText(tmpSearchText)}
                            value={tmpSearchText}
                        />
                    </div>
                </div>
                <Card className={classNames('bg-white mt-0 shadow-sm mb-5 !p-0 mx-10', cls.tableWrapper)}>
                    <JobsTable searchParams={searchParams} />
                </Card>
            </>
        </>
    );
};
export default Jobs;
