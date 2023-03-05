import { IconBrandTwitter, IconUserPlus } from "@tabler/icons-react";
import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import HighestBirds from "../../../components/app/profile/HighestBirds";
import {
	CoverImage,
	HeadlineProfileWrapper,
	HighestBirdSection,
	ImagesSection,
	ProfileAction,
	ProfileBio,
	ProfileInformation,
	ProfileName,
	ProfilePageWrapper,
	SectionTitle,
	UserAvatarWrapper,
} from "../../../components/app/profile/profile.style";
import useAuth from "../../../components/auth/useAuth";
import { ActionButton } from "../../../components/common/button/Button.style";
import useProfile from "../../../components/app/profile/useProfile";

const ProfilePage = () => {
	const { id } = useParams();
	const {
		auth: { userInfomation },
	} = useAuth();
	console.log(userInfomation);
	const { ownerBirds, profile } = useProfile(id);
	const nav = useNavigate();
	return (
		<ProfilePageWrapper>
			<ImagesSection>
				<CoverImage></CoverImage>
				<UserAvatarWrapper>
					<img
						src="https://yt3.googleusercontent.com/2rIW6m-ZDdTDITm0VpttLYxR9onL699oB1XBF-apHCjxfl88D7vA4jMTog499zSlQ_pBF8Y_WA=s900-c-k-c0x00ffffff-no-rj"
						alt=""
					/>
				</UserAvatarWrapper>
			</ImagesSection>
			<HeadlineProfileWrapper>
				<ProfileInformation>
					<ProfileName>{`${profile?.firstName} ${profile?.lastName}`}</ProfileName>
					<ProfileBio>
						Trên thông IT - Dưới tường Showbiz | Happy Code | Lửa trong tim
					</ProfileBio>
				</ProfileInformation>
				<ProfileAction>
					<ActionButton variant="lg">
						<IconBrandTwitter onClick={() => nav("birds")} />
					</ActionButton>
					<ActionButton variant="lg">
						<IconUserPlus />
					</ActionButton>
					<ActionButton variant="lg">
						<IconUserPlus />
					</ActionButton>
					<ActionButton variant="lg">
						<IconUserPlus />
					</ActionButton>
				</ProfileAction>
			</HeadlineProfileWrapper>
			<HighestBirdSection>
				<SectionTitle>Highest Birds</SectionTitle>
				<HighestBirds
					birds={
						ownerBirds?.sort(
							(bird, nextBird) => nextBird?.elo - bird?.elo
						) as any
					}
				/>
				<NavLink
					to={"/app/profile/birds"}
					style={{
						marginTop: "2rem",
						color: "var(--dark-blue)",
						fontWeight: 600,
						fontSize: "var(--text-5xl)",
					}}
				>
					See more
				</NavLink>
			</HighestBirdSection>
		</ProfilePageWrapper>
	);
};

export default ProfilePage;
