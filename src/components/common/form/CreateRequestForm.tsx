import { IconClock, IconMapPin } from '@tabler/icons-react'
import React from 'react'
import styled from 'styled-components'
import { CreateButton, CreateRequestFormWrapper, FormTitle } from './createRequest.style'
import { TextField, TextFieldBlock } from './TextField'
import { useForm } from 'react-hook-form'
import useModal from '../modal/useModal'
const FieldMaxLimit = styled.div`
  width : 30rem;
`

const CreateRequestForm = () => {
  const {handleSubmit} = useForm()
  const {closeModal} = useModal();
  return (
    <CreateRequestFormWrapper onSubmit={handleSubmit(()=>{
      console.log("submit create request")
      closeModal();
    })}>
      <FormTitle>create request</FormTitle>=
      {/* <FieldMaxLimit>
      <TextFieldBlock>
        <label htmlFor="">name</label>
        <input type="text" placeholder='name' />
      </TextFieldBlock>
    </FieldMaxLimit> */}
      <FieldMaxLimit>
        <TextFieldBlock>
          <label htmlFor="">Location</label>
          <input type="text" style={{
            color : "var(--dark-blue)"
          }} placeholder="Location" />
          {/* <IconMapPin/> */}
        </TextFieldBlock>
        <TextFieldBlock>
          <label htmlFor="">Time</label>
          <input type="text" style={{
            color : "var(--dark-blue)"
          }} placeholder="Time" />
          {/* <IconClock/> */}
        </TextFieldBlock>
      </FieldMaxLimit>
      <CreateButton type="submit">Create</CreateButton>
    </CreateRequestFormWrapper>
  );
}

export default CreateRequestForm