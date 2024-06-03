declare interface IPaginationQueryParams {
    page?: number;
    limit?: number;
}

declare interface ISortQueryParams {
    sortField?: string;
    sortType?: 'asc' | 'desc';
}
