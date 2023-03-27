import { IconInfoCircleFilled, IconKarate } from "@tabler/icons-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import axiosClient from "../../../api/axiosClient";
import { Bird } from "../../../utils/types";
import VipBadge from "../../common/tag/VipBadge";
import { RequestApi } from "../lobby/request.api";
import { BirdApi } from "../profile/bird/bird.api";
import {
	MergeInformation,
	MergeInformationItem,
	MergeInformationSection,
} from "./table.style";

type Props = {
	bird: Bird;
	kickable?: boolean;
	mergeInformation?: any;
	kickHandler?: () => void;
};

export const TableBirdWrapper = styled.div`
	display: flex;
	gap: 2rem;
	align-items: center;
	position: relative;
	border: 2px solid var(--dark-blue);
	padding: 1rem;
	border-radius: var(--roundedSmall);
	background-color: var(--dark-green);
	color: var(--gold-primary);
	width: 65rem;
`;
export const BirdImage = styled.div`
	flex: 0 0 40rem;
	aspect-ratio: 16/9;
	border-radius: var(--roundedSmall);
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	overflow: hidden;
`;
export const BirdInformations = styled.div`
	font-size: var(--text-5xl);
	display: flex;
	align-items: center;
	gap: 1.25rem;
	flex-direction: column;
	& span:nth-child(1) {
		font-size: var(--text-9xl);
	}
	span {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 1; /* number of lines to show */
		line-clamp: 1;
		-webkit-box-orient: vertical;
	}
`;
const WaitingMessage = styled.span`
	font-size: var(--text-5xl);
	background-color: var(--warning);
	color: var(--white);
	position: absolute;
	z-index: 5;
	right: 0;
	transform: translateX(100%);
	top: 0;
	padding: 0.5rem 2rem;
	border-radius: var(--roundedMedium) var(--roundedMedium) var(--roundedMedium)
		0;
	cursor: pointer;
`;
const TableBird = ({
	bird,
	kickable,
	mergeInformation,
	kickHandler,
}: Props) => {
	const [message, setMsg] = useState(true);
	const [toggleMergeInformation, setToggle] = useState(false);
	const toggleRef = useRef<any>();
	useEffect(() => {
		window.addEventListener("click", (e: MouseEvent) => {
			// Check if the click target is not a descendant of the toggleRef element
			if (toggleRef.current && !toggleRef.current.contains(e.target as Node)) {
				setToggle(false);
			}
		});
		return () => {
			window.removeEventListener("click", (e: MouseEvent) => {
				console.log("Removed event listener");
			});
		};
	}, []);
	const [account, setAccount] = useState<any>();
	const [birdDetail, setDetail] = useState<any>();
	useEffect(() => {
		console.log("Table bird ", bird);
		axiosClient
			.get("/account/" + bird?.ownerId)
			.then((res) => res.data.data)
			.then((data) => setAccount(data));
	}, [bird]);
	useEffect(() => {
		if (bird?.id) {
			BirdApi.getBirdDetail(bird.id)
				.then((res) => res.data)
				.then((bird) => setDetail(bird));
		}
	}, [bird]);
	useEffect(() => {
		console.log(account);
	}, [account]);

	const birdAvatar = useMemo(() => {
		if (birdDetail?.id) {
			if (
				birdDetail?.resourceList?.length > 0 &&
				birdDetail?.resourceList[0].dataLink
			) {
				return birdDetail.resourceList[0].dataLink;
			} else {
				return "https://indiabiodiversity.org/files-api/api/get/raw/img//Pycnonotus%20jocosus/pycnonotus_jocosus_2.jpg";
			}
		} else {
			return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNSuIiJCjxQ5gDnadu2n7QFDrDTcHvRH53OngpEKPcPRo6KUkOMJXXreesiUn5p-zka0&usqp=CAU";
		}
	}, [birdDetail]);

	return (
		<TableBirdWrapper>
			{/* {!bird?.id && message && (
        <WaitingMessage onClick={() => setMsg(false)}>
          Waiting for someone join this request
        </WaitingMessage>
      )} */}
			{account?.vip && <VipBadge />}
			<BirdImage>
				<img
					src={
						birdAvatar
							? birdAvatar
							: "https://www.seekpng.com/png/full/847-8474751_download-empty-profile.png"
					}
					alt=""
				/>
			</BirdImage>
			<BirdInformations>
				{bird ? (
					<>
						<span>{bird?.name || "Empty"}</span>
						<span>{bird?.id ? "Chao mao" : "Empty"}</span>
						<span>{bird?.owner ? bird?.owner?.username : "Empty"}</span>
						<span>
							{bird ? bird?.ratio?.win || "W:0 - L:0 - R:0%" : "Empty"}
						</span>
						<span>{bird?.elo || "NaN"}</span>
					</>
				) : (
					<span>Wait for user</span>
				)}
			</BirdInformations>
			<MergeInformationSection>
				{kickable && (
					<IconKarate
						onClick={kickHandler}
						style={{
							cursor: "pointer",
						}}
					/>
				)}
				<IconInfoCircleFilled
					ref={toggleRef}
					onClick={() => setToggle(!toggleMergeInformation)}
				/>
				{toggleMergeInformation && (
					<MergeInformation>
						<MergeInformationItem>Location</MergeInformationItem>
						<MergeInformationItem>Time</MergeInformationItem>
					</MergeInformation>
				)}
			</MergeInformationSection>
		</TableBirdWrapper>
	);
};

export default TableBird;
