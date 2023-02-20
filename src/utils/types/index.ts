export interface Account {//còn thiếu nhiều
  id:	string;
  isDeleted:	boolean;
  password: string;
  email: string;
  createDateTime:Date;
  firstName: string;
  lastName: string;
  roleString: string;
  // role: 	Roleinteger($int32)
  // Enum:
  // [ 0, 1 ]
  username: string
  description: string
}
export interface AccountResource {
  id:	string;
  isDeleted:	boolean;
  accountId: string;
  account: Account; 
  resourceId: string;
  resource: ResourceEntity;
}
export interface ResourceEntity{
  id: string;
  isDeleted: boolean;
  createById: string;
  account: Account;
  dataLink: string;
  description: string;
  createDate: Date;
  //
}
export interface Bird {
  id: string;
  isDeleted:	boolean;
  ratio: string;
  name: string;
  age: number;
  weight: number;
  elo: number;
  status: string;
  description: string;
  color: string;
  birdTypeId: string;
  ownerId: string;
  createdDatetime: Date;
  resourceList: any[];
}
export interface BirdResource {
  id:	string;
  isDeleted:	boolean;
  birdId: string;
  bird: Bird; //
  resourceId: string;
  //resource
}



export enum MatchStatus {
  Waiting,
  Pending,
  During,
  Completed,
  Cancelled,
}
export interface MatchRequest {
  primaryBird: Bird;
  time: string;
  place: string;
  secondaryBird: Bird;
}





