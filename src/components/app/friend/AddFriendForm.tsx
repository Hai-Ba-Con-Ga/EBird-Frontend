import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { AddFriendFormWrapper, AddFriendTitle, SearchContainer, SearchInput } from "./addfriend.style";
import { FriendApi } from "./friend.api";
import UserTab from "./UserTab";

const AddFriendForm = () => {
  const [textUser, setTextUser] = useState<string>('')
  const [result, setResult] = useState<any>()
  const { register, handleSubmit } = useForm();
    useEffect(() => {
      console.log("List: ", result);
    }, [result]);
  return (
    <AddFriendFormWrapper>
      <AddFriendTitle>Add Friend</AddFriendTitle>
      <SearchContainer
          onSubmit={handleSubmit(async (data) => {
          FriendApi.getFriendList(data.search)
          .then((response) => setResult(response.data))
          console.log(result);
          })}>
        <SearchInput
          type="text"
          value={textUser}
          {...register("search")}
          onChange={
            (e) => {setTextUser(e.target.value)}
          }
          placeholder="Search..."/>
            <button
              type="submit"
            >FIND</button>
      </SearchContainer>
      <UserTab user={result}></UserTab>
    </AddFriendFormWrapper>
  );
};
export default AddFriendForm;
