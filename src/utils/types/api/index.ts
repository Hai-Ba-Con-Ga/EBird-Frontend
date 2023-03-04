export interface Response<T> {
    success : boolean;
    data : T;
    message : string;
    statusCode? : number;
    pagingData? : any
}

export interface Pagination {
    currentPage: number;
    totalPages : number;
    pageSize : number;
    totalCount : number;
    hasNext : boolean;
    hasPrevious : boolean;
}