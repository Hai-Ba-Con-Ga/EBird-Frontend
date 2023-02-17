import React from "react";
import GroupList from "../../components/app/group/GroupList";
import useGroupPage from "../../components/app/group/useGroup";
import {GroupPageWrapper} from "../../components/app/group/grouppage.style";

const GroupPage = () => {
  const {groupList} = useGroupPage()
  return (
    <GroupPageWrapper>
      <GroupList groups={groupList} />
    </GroupPageWrapper>
  );
};

export default GroupPage;