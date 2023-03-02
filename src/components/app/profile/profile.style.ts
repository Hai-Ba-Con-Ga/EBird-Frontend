import styled from "styled-components";

export const ProfilePageWrapper = styled.div`
	width: 100%;
	height: 100%;
	overflow-y: auto;
`;
export const CoverImage = styled.div`
	width: 100%;

	height: 25rem;
	background: url("https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-james-wheeler-417074.jpg&fm=jpg");
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
`;
export const ImagesSection = styled.div`
	width: 100%;
	position: relative;
	height: fit-content;
`;
export const UserAvatarWrapper = styled.div`
	width: 30rem;
	aspect-ratio: 1;
	border-radius: var(--roundedFull);
	background-color: red;
	position: absolute;
	bottom: 0%;
	left: 10%;
	transform-origin: top left;
	transform: translate(-40%, 50%);
	border: 2px solid var(--dark-blue);
	overflow: hidden;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
export const HeadlineProfileWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 5rem;
	margin-left: 40rem;
	padding: 1rem;
	padding-right: 4rem;
	align-items: center;
`;
export const ProfileAction = styled.div`
	display: flex;
	gap: 1rem;
	justify-self: flex-end;
`;
export const ProfileName = styled.h1`
	font-weight: 600;
	font-size: var(--text-15xl);
	color: var(--dark-blue);
	margin: 2rem 0;
`;

export const PersonalInformationSection = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ProfileInformation = styled.div``;
export const ProfileBio = styled.span`
	color: var(--dark-blue);
	font-size: var(--text-5xl);
`;

export const HighestBirdSection = styled.div`
	padding: 2rem 4rem;
	display: grid;
	place-items: center;
	margin: 2rem 0rem;
`;
export const SectionTitle = styled.h1`
	font-size: var(--text-11xl);
	color: var(--dark-blue);
`;
