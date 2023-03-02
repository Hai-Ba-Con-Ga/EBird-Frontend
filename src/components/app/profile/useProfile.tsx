import React, { useEffect, useMemo, useState } from "react";
import axiosClient from "../../../api/axiosClient";
import useAuth from "../../auth/useAuth";
import { Bird } from "../../../utils/types";
import { ProfileApi } from "./profile.api";

function useProfile(id?: string) {
	const [ownerBirds, setOwnerBirds] = useState<Bird[]>([]);
	const {
		auth: { userInfomation },
	} = useAuth(false);
	const profileId = useMemo(
		() => (id ? id : userInfomation?.id),
		[id, userInfomation]
	);
	const isMyself = useMemo(
		() => userInfomation?.id == profileId,
		[profileId, userInfomation]
	);
	//TODO : profile
	const [profile, setProfile] = useState<any>();
	useEffect(() => {
		// TODO : replace this twith BirdApi at BFCS-126
		const url = "/bird/owner";
		axiosClient
			.get(url)
			.then((response) => response.data.data)
			.then((data) => setOwnerBirds(data));
	}, []);
	useEffect(() => {
		if (profileId) {
			ProfileApi.getProfile(profileId as string)
				.then((res) => res.data)
				.then((data) => console.log(setProfile(data)));
		}
	}, [profileId]);
	return {
		ownerBirds,
		profile,
		profileId,
		isMyself,
	};
}

export default useProfile;
