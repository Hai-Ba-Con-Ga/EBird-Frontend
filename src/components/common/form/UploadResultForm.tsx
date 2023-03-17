import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useImagekit from "../../app/common/useImagekit";
import { MatchApi } from "../../app/lobby/match.api";
import useModal from "../modal/useModal";
import {
	UpdateResultFormWrapper,
	UpdateResultTitle,
	UpdateResultProof,
	UpdateResultInput,
	ConfirmButton,
	BirdSelectArea,
	SelectUpload,
} from "./uploadResult.style";

type Props = {
	matchID?: string;
	birdId: string;
};
const UpdateResultForm = ({ matchID, birdId }: Props) => {
	const { handleSubmit, register } = useForm();
	console.log(matchID, "\n", "BIRD ID = ", birdId);
	const { closeModal } = useModal();
	const imagekit = useImagekit();

	return (
		<UpdateResultFormWrapper
			onSubmit={handleSubmit(async (data) => {
				console.log(data);
				const resources: any[] = [];
				const proofFiles: FileList = data.proof;
				console.log(proofFiles);
				console.time("upload start");
				const resultUpload = await Promise.all(
					Array.from(proofFiles).map((file) => {
						return imagekit.upload({
							folder: "/globird/match/" + matchID,
							file: file,
							fileName: `${matchID}-${file.name}`,
							tags: ["bird"],
						});
					})
				).finally(() => console.timeEnd("upload start"));
				resultUpload.forEach((result) => {
					if (result.url) {
						resources.splice(resources.length, 1, {
							dataLink: result.url,
							description: result.name,
							thumbnail: "",
						});
					}
				});
				console.log(resources);

				const params = {
					result: data.result,
					birdId,
					matchId: matchID,
					listResource: resources,
				};
				// console.log(params);

				const res = await MatchApi.updateResult(params);
				console.log(res);
				if (res.success) {
					closeModal();
				} else {
					toast.warning("Cannot update result");
				}
			})}
		>
			<UpdateResultTitle>UPDATE RESULT</UpdateResultTitle>

			<UpdateResultProof htmlFor="file">
				<UpdateResultInput
					multiple
					type="file"
					{...register("proof")}
					id="file"
				/>
				<label htmlFor="file">Choose a file</label>
			</UpdateResultProof>
			<h1>RESULT</h1>
			<SelectUpload {...register("result")} placeholder="Result">
				<option value="Win">Win</option>
				<option value="Lose">Lose</option>
				<option value="Draw">Tie</option>
			</SelectUpload>

			<ConfirmButton type="submit">UPDATE</ConfirmButton>
		</UpdateResultFormWrapper>
	);
};
export default UpdateResultForm;
