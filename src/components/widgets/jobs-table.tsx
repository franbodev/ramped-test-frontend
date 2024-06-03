import React, { useEffect } from 'react';
import { Table } from '@components/ui/table';
import { useDispatch } from 'react-redux';
import { getJobs } from '@redux/jobs/actions';
import { useRedux } from '@redux/index';
import Loader from '@components/ui/loader/loader';
import debounce from 'lodash/debounce';

// eslint-disable-next-line
const TableCell = ({ children, ...rest }: { children?: React.ReactNode; last?: boolean; [index: string]: any }) => {
    return <div {...rest}>{children ?? ''}</div>;
};

export interface JobsTableProps {
    searchParams?: IJob.QueryParams;
}

const JobsTable = ({ searchParams = {} }: JobsTableProps) => {
    const dispatch = useDispatch();
    const jobs = useRedux('jobs');
    useEffect(() => {
        const debounceHandlePagination = debounce(handleChangePagination, 500);
        debounceHandlePagination(1, 10);
    }, [searchParams]);

    const handleChangePagination = async (page: number, pageSize: number) => {
        dispatch(
            getJobs({
                page: page,
                limit: pageSize,
                ...searchParams,
            })
        );
    };

    const columns = [
        {
            title: (
                <div style={{ position: 'relative' }}>
                    <div className="pl-3 flex items-center">
                        <span> Job Title </span>
                    </div>
                </div>
            ),
            dataIndex: 'job_name',
            key: 'job_name',
            render: (job_name: string) => {
                return <TableCell>{job_name}</TableCell>;
            },
            align: 'left',
            width: '25%',
        },
        {
            title: (
                <div style={{ position: 'relative' }}>
                    <div className="pl-3 flex items-center">
                        <span> Company </span>
                    </div>
                </div>
            ),
            dataIndex: 'company_name',
            key: 'company_name',
            render: (company_name: string) => {
                return <TableCell>{company_name}</TableCell>;
            },
            align: 'left',
            width: '25%',
        },
    ];

    if (jobs.isLoading) {
        return <Loader />;
    }

    return (
        <div className="jobs-table">
            <Table
                tableLayout="fixed" // eslint-disable-next-line
                columns={columns as any}
                emptyText="No data found"
                data={jobs?.data}
                rowKey="_id"
                scroll={{ x: 500 }}
                sticky={true}
                className="matrix vendor-table"
                onHeaderRow={() => ({
                    className: 'header-title',
                })}
            />
        </div>
    );
};

export default React.memo(JobsTable);
