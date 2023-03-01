import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { RequestApi } from "../../app/lobby/request.api";
import SidebarAtom from "./sidebar.atom";

interface Props {
  init?: boolean;
}
const useSidebar = ({ init }: Props) => {
  // const [myRequests,setRequests] = useState<any[]>();
  const [sidebarState, setSidebarState] = useRecoilState(SidebarAtom);
  useEffect(() => {
    if (init) {
      RequestApi.getMyRequest().then((request) =>
        setSidebarState({ ...sidebarState, myRequests: request.data })
      );
    }
  }, []);
  const getListRelatedRequests = useCallback(() => {
    RequestApi.getMyRequest().then((request) =>
      setSidebarState({ ...sidebarState, myRequests: request.data })
    );
  }, [sidebarState]);

  return {
    myRequests: sidebarState.myRequests,
    getListRelatedRequests
  };
};

export default useSidebar;
