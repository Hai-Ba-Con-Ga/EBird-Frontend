export interface Response<T> {
    success : boolean;
    data : T;
    message : string;
    statusCode? : number;
    pagingData? : any
}