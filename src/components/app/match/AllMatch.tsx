import React, { useCallback, useEffect, useState } from "react";
import {
  AllMatchTabSide,
  AllMatchWrapper,
  MatchesLayout,
  MatchTab,
} from "./match.style";
import MatchCard from "./MatchCard";

// type Props = {};

const tabs = [
  {
    value: 1,
    show: "On Going",
  },
  {
    value: 2,
    show: "Coming",
  },
  {
    value: 3,
    show: "Finish",
  },
];

const AllMatch = () => {
  const [tab, setTab] = useState<number>(1);
  useEffect(() => {
    console.log("TAB", tab);
  }, [tab]);
  return (
    <AllMatchWrapper>
      <AllMatchTabSide>
        {tabs?.map((navTab) => (
          <MatchTab
            key={navTab.value}
            active={navTab.value === tab}
            onClick={useCallback(() => {
              setTab(navTab.value);
            }, [])}
          >
            {navTab.show}
          </MatchTab>
        ))}
      </AllMatchTabSide>
      <MatchesLayout>
        <MatchCard />
        <MatchCard />
        <MatchCard />
        <MatchCard />
      </MatchesLayout>
    </AllMatchWrapper>
  );
};

export default AllMatch;
