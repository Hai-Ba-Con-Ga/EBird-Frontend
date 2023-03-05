import React, { useCallback } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../auth/useAuth";
import useModal from "../../../common/modal/useModal";
import { BirdApi } from "./bird.api";

const useBird = () => {
	const {
		auth: { userInfomation },
	} = useAuth();
	const { closeModal } = useModal();
	const createNewBird = useCallback(
		async (formData: CreateBirdFormData) => {
			if (!userInfomation) return;
			const res = await BirdApi.createNewBird({
				...formData,
				ownerId: userInfomation?.id,
			});
			if (res.success) {
				toast.success("Create new bird successfully");
				closeModal();
			} else {
				toast.error("Cannot create new bird");
			}
		},
		[userInfomation]
	);

	const getBirdMatchHistory = useCallback(async (birdId: string) => {
		const matches = await BirdApi.getMatchHistory(birdId).then(
			(res) => res.data
		);
		return matches;
	}, []);

	return {
		getBirdMatchHistory,
		createNewBird,
	};
};
interface CreateBirdFormData {
	name: string;
	age: number;
	weight: number;
	description: string;
	color: string;
	birdTypeId: string;
}
export default useBird;
