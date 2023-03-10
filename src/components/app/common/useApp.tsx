import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { Bird } from "../../../utils/types";
import useAuth from "../../auth/useAuth";
import { TextFieldBlock } from "../../common/form/TextField";
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
			console.log("Selected", bird);
			setAppState((old) => ({ ...old, currentBird: bird }));
		},
		[appState]
	);
	useEffect(() => {
		console.log("App state changed", appState);
	}, [appState]);
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
			<TextFieldBlock>
				<label htmlFor="">{userInfomation?.username}</label>
				<Select value={appState.currentBird?.name} placeholder="My Bird">
					{birdsOwned &&
						birdsOwned?.map((bird, i) => (
							<SelectOption key={i} onClick={() => setCurrentBird(bird)}>
								{bird?.name}
							</SelectOption>
						))}
				</Select>
			</TextFieldBlock>
		),
	};
};

export default useApp;
