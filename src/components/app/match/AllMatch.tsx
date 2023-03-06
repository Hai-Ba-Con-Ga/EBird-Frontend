import React, { useCallback, useEffect, useState } from "react";
import { MatchStatus } from "../../../utils/types";
import { MatchApi } from "../lobby/match.api";
import {
	AllMatchTabSide,
	AllMatchWrapper,
	MatchesLayout,
	MatchTab,
} from "./match.style";
import MatchCard from "./MatchCard";

// type Props = {};

const AllMatch = () => {
	const MatchPageTabs = [
		{
			label: "Overview",
			value: "",
		},
		{
			label: "Completed",
			value: "Completed",
		},
		{
			label: "On going",
			value: "During",
		},
	];
	const [currentTab, setTab] = useState<string>(MatchPageTabs[0].value);
	const [matches, setMatches] = useState<any[]>([]);
	useEffect(() => {
		MatchApi.getAllMatches({
			MatchStatus: currentTab as MatchStatus,
			PageNumber: 1,
			PageSize: 10,
		}).then((response) => {
			setMatches(response.data);
		});
	}, [currentTab]);
	return (
		<AllMatchWrapper>
			<AllMatchTabSide>
				{MatchPageTabs?.map((navTab) => (
					<MatchTab
						key={navTab.value}
						active={navTab.value === currentTab}
						onClick={useCallback(() => {
							setTab(navTab.value);
						}, [])}
					>
						{navTab.label}
					</MatchTab>
				))}
			</AllMatchTabSide>
			<MatchesLayout>
				{matches?.map((match) => (
					<MatchCard key={match?.id} match={match} />
				))}
			</MatchesLayout>
		</AllMatchWrapper>
	);
};

export default AllMatch;
