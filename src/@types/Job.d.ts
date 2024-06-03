declare namespace IJob {
    interface Payload {
        id: string;
        job_name?: string;
        company_name?: string;
        job_full_text?: string;
        status?: string;
        createdAt?: string;
        updatedAt?: string;
    }

    type State = StateWithArrayPayload<Payload>;

    type Status = 'active' | 'closed' | 'pending' | 'paused';

    interface QueryParams extends IPaginationQueryParams, ISortQueryParams {
        job_name?: string;
    }
}
