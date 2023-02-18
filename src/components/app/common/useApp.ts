import React, { useCallback } from "react";
import { useRecoilState } from "recoil";
import AppAtom from "./app.atom";

const useApp = () => {
  const [appState, setAppState] = useRecoilState(AppAtom);
  // TODO : Bird type
  const setCurrentBird = useCallback(
    (bird: any) => {
      setAppState({ ...appState, currentBird: bird });
    },
    [appState]
  );
  return {
    setCurrentBird,
    currentBird: appState.currentBird,
    currentRoom: appState.currentRoom,
  };
};

export default useApp;
