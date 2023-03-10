import React, { useCallback } from "react";
import { toast } from "react-toastify";
import useAuth from "../../../auth/useAuth";
import useModal from "../../../common/modal/useModal";
import useLoading from "../../../useLoading";
import useImagekit from "../../common/useImagekit";
import { BirdApi } from "./bird.api";

const useBird = () => {
	const {
		auth: { userInfomation },
	} = useAuth();
	const imagekit = useImagekit();
	const { closeModal } = useModal();
	const {openLoading,closeLoading} = useLoading();
	const createNewBird = useCallback(
		async (formData: CreateBirdFormData) => {
			openLoading();
			if (!userInfomation) return;
			console.log(imagekit);
			console.log(formData);
			const resouces: any[] = [];
			if (formData.images) {
				const responseUpload = await imagekit.upload({
					folder: "/globird/birds",
					file: formData.images[0],
					fileName: `${formData.images[0].name}.jpg`,
					tags: ["bird"],
				});
				if (responseUpload.url) {
					resouces.splice(resouces.length, 1, {
						dataLink: responseUpload.url,
						description: responseUpload.name,
					});
				}
			}
			console.log(resouces);

			const res = await BirdApi.createNewBird({
				...formData,
				ownerId: userInfomation?.id,
				listResource: resouces,
			});
			closeLoading();
			if (res.success) {
				toast.success("Create new bird successfully");
				closeModal();
			} else {
				toast.error("Cannot create new bird");
			}
		},
		[userInfomation, imagekit]
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
	images?: FileList;
}
export default useBird;
