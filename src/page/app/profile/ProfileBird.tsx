import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/admin/@core/theme/overrides/button";
import { BirdApi } from "../../../components/app/profile/bird/bird.api";
import BirdCard from "../../../components/app/profile/bird/BirdCard";
import { ButtonCommon } from "../../../components/common/button/Button.style";
import useModal from "../../../components/common/modal/useModal";
import { Bird } from "../../../utils/types";
import useProfile from "../../../components/app/profile/useProfile";
import CreateBirdModal from "../../../components/app/profile/bird/CreateBirdModal";
import { IconRefresh } from "@tabler/icons-react";

export const ProfileBirdPage = styled.div`
	padding: 3rem;
`;

const ProfileBird = () => {
	const { id } = useParams();
	const { profileId } = useProfile(id);
	const [birds, setBirds] = useState<Bird[]>([]);
	const { openModal } = useModal();
	useEffect(() => {
		getBirds();
	}, [profileId]);
	const getBirds = useCallback(() => {
		if (profileId) {
			BirdApi.getBirdByOwner(profileId)
				.then((res) => res.data)
				.then((birds) => setBirds(birds));
		}
	}, [profileId]);
	const handleCreateBirdClick = useCallback(() => {
		openModal({
			closable: true,
			component: <CreateBirdModal />,
			payload: null,
		});
	}, []);
	return (
		<ProfileBirdPageWrapper>
			<FilterSidebar>
				<CreateBirdButton onClick={handleCreateBirdClick}>
					Create new bird
				</CreateBirdButton>
			</FilterSidebar>
			<BirdCollectionSection>
				<BirdViewHeadline>
					Bird Collections{" "}
					<IconRefresh
						style={{ cursor: "pointer" }}
						onClick={() => getBirds()}
					/>
				</BirdViewHeadline>
				<BirdView>
					{birds?.map((bird) => (
						<BirdCard key={bird?.id} bird={bird} />
					))}
				</BirdView>
			</BirdCollectionSection>
		</ProfileBirdPageWrapper>
	);
};
export const CreateBirdButton: any = styled(ButtonCommon)`
	background: var(--dark-blue);
	color: var(--white);
	font-size: var(--text-3xl);
	padding: 2rem 4rem;
	border-radius: var(--roundedSmall);
`;
export const ProfileBirdPageWrapper = styled.div`
	padding: 2rem;
	display: flex;
	height: 100%;
`;

export const FilterSidebar = styled.div`
	flex: 0 0 20%;
	height: 100%;
	display: grid;
	place-items: center;
`;

export const BirdView = styled.div`
	height: 100%;
	/* background-color: red; */
	display: grid;
	grid-template-columns: repeat(4, minmax(0, 1fr));
	grid-auto-columns: minmax(0, 1fr);
	grid-gap: 0px;
	overflow-y: auto;
	overflow-x: visible;
	gap: 5rem;
`;
export const BirdViewHeadline = styled.h1`
	font-size: var(--text-11xl);
	font-weight: 600;
`;
export const BirdCollectionSection = styled.div`
	flex: 1 1 80%;
	height: 100%;
	padding-bottom: 2rem;
`;
export default ProfileBird;
