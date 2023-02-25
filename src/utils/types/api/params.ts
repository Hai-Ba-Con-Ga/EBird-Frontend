import { Pagination } from ".";
export interface CreateRequestParams {
  requestDatetime: Date | string;
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
  pagination?: Pagination;
  roomId: string;
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
