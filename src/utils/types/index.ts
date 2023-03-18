export interface Account {
	//DONE
	id: string;
	password: string;
	email: string;
	createDateTime: Date;
	firstName: string;
	lastName: string;
	roleString: string;
	role: RoleAccount;
	username: string;
	description: string;
}
export interface AccountResource {
	//DONE
	id: string;
	isDeleted: boolean;
	accountId: string;
	account: Account;
	resourceId: string;
	resource: Resource;
}
export interface Bird {
	//DONE
	id: string;
	name: string;
	age: number;
	weight: number;
	elo: number;
	number: number;
	status: string;
	description: string;
	color: string;
	ratio: Ratio;
	birdTypeId: string;
	ownerId: string;
	createdDatetime: Date;
	resourceList: Resource[];
	owner: any;
}

export interface Ratio {
	//DONE
	win: number;
	lose: number;
	ratio: number;
}
export interface BirdResource {
	//DONE
	id: string;
	isDeleted: boolean;
	birdId: string;
	bird: Bird;
	resourceId: string;
	resource: Resource;
}
export interface BirdType {
	//DONE
	id: string;
	typeCode: string;
	typeName: string;
	createdDatetime: Date;
}
export interface ChatRoom {
	//DONE
	id: string;
	isDeleted: boolean;
	name: string;
	typeString: string;
	typeChatRoom: TypeChatRoom;
	participants: Participant[];
	messages: Message[];
}
export interface Group {
	//DONE
	id: string;
	name: string;
<<<<<<< HEAD
	maxElo: number;
	minElo: number;
=======
	maxELO: number;
	minELO: number;
>>>>>>> 1824332bfa6642ea78ae5ce7d18ffa9d3fdbfcad
	status: string;
	createDatetime: Date;
	createdById: string;
}
export interface Message {
	//DONE
	id: string;
	isDeleted: boolean;
	content: string;
	chatRoomId: string;
	chatRoom: ChatRoom;
	senderId: string;
	sender: Account;
	timestamp: Date;
}
export interface Notification {
	//DONE
	id: string;
	content: string;
	createDateTime: Date;
	accountId: string;
	notificatoinTypeId: string;
}
export interface Participant {
	//DONE
	id: string;
	isDeleted: boolean;
	accountId: string;
	account: Account;
	chatRoomId: string;
	chatRoom: ChatRoom;
}
export interface Place {
	//DONE
	id: string;
	address: string;
	name: string;
	longitude: string;
	latitude: string;
}
export interface Post {
	//DONE
	id: string;
	content: string;
	title: string;
	createDateTime: Date;
	createById: string;
	thumbnail: Resource;
}
export interface RefreshToken {
	//DONE
	id: string;
	isDeleted: boolean;
	accountId: string;
	account: Account;
	token: string;
	jwtId: string;
	isUsed: boolean;
	isRevoked: boolean;
	issuedAt: Date;
	expiredAt: Date;
}
export interface Report {
	//DONE
	id: string;
	isDeleted: boolean;
	context: string;
	title: string;
	status: string;
	createdDateTime: Date;
	handleDateTime: Date;
	createById: string;
	createBy: Account;
	handleById: string;
	handleBy: Account;
}
export interface Resource {
	//DONE
	id: string;
	dataLink: string;
	description: string;
	createDate: Date;
	createById: string;
}
export interface Room {
	//DONE
	id: string;
	name: string;
	status: string;
	city: string;
	createDateTime: Date;
	createById: string;
}
export interface Rule {
	//DONE
	id: string;
	isDeleted: boolean;
	createById: string;
	account: Account;
	content: string;
	title: string;
	createDateTime: Date;
}
export interface Match {
	//DONE
	id: string;
	matchDatetime: Date;
	createDatetime: Date;
	matchStatus: MatchStatus;
	hostId: string;
	challengerId: string;
	placeId: string;
	place: Place;
	matchBirdList: MatchBird[];
}
export interface MatchBird {
	//DONE
	bird: Bird;
	afterElo: number;
	beforeElo: number;
	result: MatchBirdResult;
	updateDatetime: Date;
}

export interface VerificationStore {
	//DONE
	id: string;
	isDeleted: boolean;
	code: string;
	accountId: string;
}

export interface RequestEntity {
	id: string;
}

export type RequestTime = "AM" | "PM";
//ENUM CONVENTION

export enum TypeChatRoom {
	Private,
	Group,
}
export enum RolePlayer {
	Host,
	Challenger,
}
export enum RequestStatus {
	Waiting = "Waiting",
	Matched = "Matched",
	Closed = "Closed",
}
export enum MatchStatus {
	Pending,
	During = "During",
	Completed = "Completed",
	Approved = "Approved",
	Cancelled = "Cancelled",
	Conflict = "Conflict",
}
export enum MatchDetailStatus {
	NotReady,
	Ready,
	Win,
	Lose,
	Drawn,
}
export enum RoleAccount {
	Admin,
	User,
}
export enum MatchBirdResult {
	NotReady,
	Ready,
	Draw,
	Lose,
	Win,
}

//////////////////////////////////// NOT YET

export interface NotificationType {
	//DONE
	id: string;
	isDeleted: boolean;
	typeCode: string;
	typeName: string;
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
	// matchResources: MatchResource[];
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
