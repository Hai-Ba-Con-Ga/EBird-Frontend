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
						src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
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
