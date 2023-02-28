import React from "react";
import { useForm } from "react-hook-form";
import { MatchApi } from "../../app/lobby/match.api";
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

  return (
    <UpdateResultFormWrapper
      onSubmit={handleSubmit(async (data) => {
        const params = {
          result: data.result,
          birdId,
          matchId: matchID,
        };
        // console.log(params);

        const res = await MatchApi.updateResult(params);
        console.log(res);
      })}
    >
      <UpdateResultTitle>UPDATE RESULT</UpdateResultTitle>

      <UpdateResultProof>
        <UpdateResultInput type="file" {...register("proof")} id="file" />
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
