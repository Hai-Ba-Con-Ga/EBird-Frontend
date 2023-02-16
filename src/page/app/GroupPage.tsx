import React from "react";
import styled from "styled-components";
import AllMatch from "../../components/app/match/AllMatch";
import MyMatch from "../../components/app/match/MyMatch";
import GroupList from "../../components/app/group/GroupList";
import useGrouppage from "../../components/app/group/useGroup";

import {
  AllMatchWrapper,
  GroupPageWrapper,
  MyMatchWrapper,
} from "../../components/app/group/grouppage.style";
import MatchCard from "../../components/app/match/MatchCard";


const GroupPage = () => {
  const {groupList} = useGrouppage()
  return (
    <GroupPageWrapper>
      <GroupList/>
    </GroupPageWrapper>
  );
};

export default GroupPage;