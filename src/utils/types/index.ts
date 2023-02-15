
export interface MatchRequest {
    primaryBird: Bird;
    time : string;
    place : string;
    secondaryBird : Bird;
}
export interface Bird {
    "id": string
   "name": string,
   "age": number,
   "weight": number,
   "elo": number,
   "status": string,
   "description": string,
   "color": string,
   "birdTypeId": string,
   "ownerId":string,
   "createdDatetime": Date,
   "resourceList": any[]
}