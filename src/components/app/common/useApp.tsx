import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Bird } from "../../../utils/types";
import useAuth from "../../auth/useAuth";
import Select from "../../common/select/Select";
import { SelectOption } from "../../common/select/Select.style";
import { BirdApi } from "../profile/bird.api";
import AppAtom from "./app.atom";

interface useAppProps {
  useSelection: boolean;
}

const useApp = ({ useSelection = false }: useAppProps) => {
  const [appState, setAppState] = useRecoilState(AppAtom);
  const {
    auth: { userInfomation },
  } = useAuth();
  const setCurrentBird = useCallback(
    (bird: Bird) => {
      setAppState({ ...appState, currentBird: bird });
    },
    [appState]
  );
  // CURRENT BIRD SELECT
  const [birdsOwned, setBirds] = useState<Bird[]>();
  useEffect(() => {
    if (useSelection) {
      BirdApi.getOwnedBirds().then((res) => {
        setBirds(res.data);
      });
    }
  }, [userInfomation]);

  return {
    setCurrentBird,
    currentBird: appState.currentBird,
    currentRoom: appState.currentRoom,
    SelectBird: (
      <Select value={appState.currentBird?.name} placeholder="Select">
        {birdsOwned &&
          birdsOwned?.map((bird, i) => (
            <SelectOption key={i} onClick={() => setCurrentBird(bird)}>
              {bird?.name}
            </SelectOption>
          ))}
      </Select>
    ),
  };
};

export default useApp;
