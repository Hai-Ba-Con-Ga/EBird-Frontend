import React from 'react'
import { useForm } from 'react-hook-form';
import {
    UpdateResultFormWrapper,
    UpdateResultTitle,
    UpdateResultProof,
    UpdateResultInput,
    ConfirmButton,
    BirdSelectArea,
    SelectUpload
} from './uploadResult.style';

type Props ={
    matchID?: string;
}
const UpdateResultForm = ({matchID}: Props) => {

    
    const {handleSubmit, register} = useForm();
    
    return (
        
        <UpdateResultFormWrapper onSubmit={handleSubmit(async (data) =>{
            console.log(data.result)
            
            
        } )}>
            
            <UpdateResultTitle>UPDATE RESULT</UpdateResultTitle>

            <UpdateResultProof >
                <UpdateResultInput type="file"  {...register("proof")} id="file"  />
                <label htmlFor="file">Choose a file</label>
            </UpdateResultProof>
            <h1>RESULT</h1>
            <SelectUpload  {...register("result")} placeholder="Result">
                <option value="3">Win</option>
                <option value="2">Lose</option>
                <option value="4">Tie</option>
            </SelectUpload>
            
            <ConfirmButton type='submit'>UPDATE</ConfirmButton>
        </UpdateResultFormWrapper>
    )
}
export default UpdateResultForm
