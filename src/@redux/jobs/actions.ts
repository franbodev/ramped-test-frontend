export const getJobs =
    (query: IJob.QueryParams = {}) =>
    ({ axios }: ActionOptions) => ({
        type: '@jobs/GET',
        meta: {
            snack_error: { content: 'Failed to load jobs' },
        },
        // eslint-disable-next-line
        payload: axios.get('jobs/search', { withCredentials: true, params: { ...query } }).then(({ data }: any) => {
            console.log(data);
            return { data: data?.jobs ?? [] };
        }),
    });
