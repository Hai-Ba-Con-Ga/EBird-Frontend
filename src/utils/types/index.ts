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
  resource: Resource;
}
//3
export interface Bird {
  id: string;
  isDeleted:	boolean;
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
  birdResources: any[];
  matchBirds: MatchBird;
}
//4
export interface BirdResource {
  id:	string;
  isDeleted:	boolean;
  birdId: string;
  bird: Bird; 
  resourceId: string;
}
//5
export interface BirdType{
  id: string;
  isDeleted:	boolean;
  typeCode: string;
  typeName: string;
  createdDatetime: Date;
  birds: Bird[];
}
//6
export interface ChatRoom{
  id: string;
  isDeleted:	boolean;
  name: string;
  typeString:string;
  typeChatRoom: TypeChatRoom;
  participants:Participant[];
  messages: Message[];
}
//7
export interface Group{
  id: string;
  isDeleted: boolean;
  name: string;
  maxELO:number;
  minElo:number;
  status: string;
  createDatetime: Date;
  createdById: string;
  matches:Match[];
}
//11
export interface Message{
  id: string;
  isDeleted: boolean;
  content: string;
}
//12
export interface Notification{
  id: string;
  isDeleted: boolean;
  content: string;
  createDateTime: Date;
  accountId: string;
  notificatoinTypeId: string;
}
//13 ?? khong biet dung khong 
export interface NotificationType{
  typeCode:string;
  typeName:string;
}
//14
export interface Participant {//chat room
  id: string;
  isDeleted: boolean;
  accountId:string;
  account:Account;
  chatRoomId: string;
  chatRoom:ChatRoom;
}
//15
export interface Place{//chat room
  id: string;
  isDeleted: boolean;
  address: string;
  name: string;
  longitude: string;
  latitude: string;
  createdDate: Date;
  matches: Match[];
}
//16
export interface Post{////
  id: string;
  isDeleted: boolean;
  content: string;
  title:string;
  createDateTime: Date;
  createById: string;
  createBy: Account;
  thumbnailId: string;
  thumbnail: any[]/////////////////

}
//17
export interface RefreshTokenEntity{
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
  groups:Group;

}
//18
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
//19 Request
//20
export interface Resource{
  id: string;
  isDeleted: boolean;
  createById: string;
  account: Account;
  dataLink: string;
  description: string;
  createDate: Date;
  accountResources:string;
  birdResources:string;
  matchResources:string;
  post: Post;
}
//21
export interface Room {
  id: string;
  isDeleted: boolean;
  name: string;
  status: string;
  city: string;
  createDateTime: Date;
  createById:string;
  createBy: Account;
  matches: Match[];
}
//22
export interface Rule {
  id: string;
  isDeleted: boolean;
  createByI: string;
  account: Account;
  content: string;
  title: string;
  createDateTime: Date;
}
//23
// export interface VerificationStore {
//   id: string;
//   isDeleted: boolean;
  
// }

/// NOT YET

// export enum TypeChatRoom {
//   no,
//   yes
// }

///
export interface Match{
  id: string;
  isDeleted: boolean;
}
export interface MatchBird{
  id: string;
  isDeleted:	boolean;
}