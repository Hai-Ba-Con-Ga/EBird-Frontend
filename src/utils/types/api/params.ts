import { Pagination } from ".";
import { MatchStatus } from "..";
export interface CreateRequestParams {
	requestDatetime: string;
	hostBirdId: string;
	placeId?: string;
	hostId?: string;
	groupId?: string;
	roomId: string;
	place: {
		address: string;
		name: string;
		longitude: number;
		latitude: number;
	};
}
export interface GetAllRequestParams {
	pagination?: RequestPagination;
	roomId?: string;
}
export interface JoinRequestParams {
	challengerBirdId: string;
	requestId: string;
}
export interface CreatePlaceParams {
	address: string;
	name: string;
	longitude: number;
	latitude: number;
}

export interface CreateMatchParams {
	requestId: string;
	userId?: string;
}

export interface RequestPagination {
	PageNumber: number;
	PageSize: number;
}

export interface GetAllMatchParams extends RequestPagination {
	MatchStatus?: MatchStatus;
}
