export interface Account {//request, match
  id:	string;
  isDeleted:	boolean;
  password: string;
  email: string;
  createDateTime:Date;
  firstName: string;
  lastName: string;
  roleString: string;
  role: RoleAccount;
  username: string
  description: string
  refreshTokens: RefreshToken[];
  groups: Group[];
  rooms: Room[];
  birds: Bird[];
  rules: Rule[];
  resources: Resource[];
  accountResources: AccountResource[];
  participants: Participant[];
  messages: Message[];
  hostRequests: RequestEntity[];
  challengerRequests: RequestEntity[];
  notifications: Notification[];
  reportCreates: Report[];
  reportHandles: Report[];
  matchesWithHost: Match[];
  matchesWithChallenger: Match[];

}
export interface AccountResource {
  id:	string;
  isDeleted:	boolean;
  accountId: string;
  account: Account; 
  resourceId: string;
  resource: Resource;
}
export interface Bird {//request
  id: string;
  isDeleted: boolean;
  number: number;
  name: string;
  age: number;
  weight: number;
  elo: number;
  status: string;
  createdDatetime: Date;
  description: string;
  color: string;
  birdTypeId: string;
  birdType: BirdType;
  ownerId: string;
  owner: Account;
  birdResources: BirdResource[];
  hostRequests: RequestEntity[];
  challengerRequests: RequestEntity[];
  matchBirds: MatchDetail[];
}
export interface BirdResource {
  id:	string;
  isDeleted:	boolean;
  birdId: string;
  bird: Bird; 
  resourceId: string;
  resource: Resource;
}
export interface BirdType{
  id: string;
  isDeleted:	boolean;
  typeCode: string;
  typeName: string;
  createdDatetime: Date;
  birds: Bird[];
}
export interface ChatRoom{
  id: string;
  isDeleted: boolean;
  name: string;
  typeString: string;
  typeChatRoom: TypeChatRoom;
  participants:Participant[];
  messages: Message[];
}
export interface Group{ //request, match
  id: string;
  isDeleted: boolean;
  name: string;
  maxELO:number;
  minElo:number;
  status: string;
  createDatetime: Date;
  createdById: string;
  requests: RequestEntity[];
  matches: Match[];
}
export interface Message{
  id: string;
  isDeleted: boolean;
  content: string;
  chatRoomId: string;
  chatRoom: ChatRoom;
  senderId: string;
  sender: Account;
  timestamp: Date;
}
export interface Notification{
  id: string;
  isDeleted: boolean;
  content: string;
  createDateTime: Date;
  accountId: string;
  notificatoinTypeId: string;
}
export interface Participant {//chat room
  id: string;
  isDeleted: boolean;
  accountId: string;
  account: Account;
  chatRoomId: string;
  chatRoom: ChatRoom;
}
export interface Place{//request, match
  id: string;
  isDeleted: boolean;
  address: string;
  name: string;
  longitude: string;
  latitude: string;
  createdDate: Date;
  requests: RequestEntity[];
  matches: Match[];
}
export interface Post{////
  id: string;
  isDeleted: boolean;
  content: string;
  title: string;
  createDateTime: Date;
  createById: string;
  createBy: Account;
  thumbnailId: string;
  thumbnail: Resource;

}
export interface RefreshToken{
  id: string;
  isDeleted: boolean;
  accountId: string;
  account: Account;
  token: string;
  jwtId:string;
  isUsed:boolean;
  isRevoked:boolean;
  issuedAt:Date;
  expiredAt:Date;
}
export interface Report{
  id: string;
  isDeleted: boolean;
  context: string;
  title: string;
  status: string;
  createdDateTime: Date;
  handleDateTime: Date;
  createById: string;
  createBy:Account;
  handleById:string;
  handleBy:Account;
}
export interface Resource{//match
  id: string;
  isDeleted: boolean;
  createById: string;
  account: Account;
  dataLink: string;
  description: string;
  createDate: Date;
  accountResources: AccountResource[];
  birdResources: BirdResource[];
  matchResources: Match[];
  post: Post;
}
export interface Room {//request, match
  id: string;
  isDeleted: boolean;
  name: string;
  status: string;
  city: string;
  createDateTime: Date;
  createById:string;
  createBy: Account;
  requests: RequestEntity[];
  matches: Match[];
}
export interface Rule {
  id: string;
  isDeleted: boolean;
  createById: string;
  account: Account;
  content: string;
  title: string;
  createDateTime: Date;
}

// export interface VerificationStore {
//   id: string;
//   isDeleted: boolean;
  
// }

///**

 

//ENUM CONVENTION

export enum TypeChatRoom{
  Private, Group
}
export enum RolePlayer{
  Host,
  Challenger
}
export enum RequestStatus {
  Waiting,
  Matched
}
export enum MatchStatus {
  Pending,
  During,
  Completed,
  Approved ,
  Cancelled
}
export enum MatchDetailStatus {
  NotReady,
  Ready,
  Win,
  Lose ,
  Drawn
}
export enum RoleAccount {
  Admin,
  User
}

//////////////////////////////////// NOT YET
//13 ?? khong biet dung khong 
export interface NotificationType{
  typeCode:string;
  typeName:string;
}

/// MATCH
export interface MatchDetail {
  id: string;
  isDeleted: boolean;
  birdId: string;
  bird: Bird;
  matchId: string;
  match: Match;
  result: MatchDetailStatus;
  afterElo: number;
  beforeElo: number;
  updateDatetime: Date;
  role: RolePlayer;
  matchResources: MatchResource[];
}
// export interface MatchResource{}
// export interface Match{}
// export interface MatchBird{}

////REQUEST
// export interface MatchRequest {
//   primaryBird: Bird;
//   time: string;
//   place: string;
//   secondaryBird: Bird;
// }

// export interface MatchResoure {}
// export interface RequestEntity{}



