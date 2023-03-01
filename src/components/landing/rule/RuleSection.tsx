import React, { useState } from "react";
import ImageComponent from "../../common/image/ImageComponent";
import { RuleBlockWrapper, RuleSectionWrapper } from "./RuleSection.style";

const RuleSection = () => {
  const [rules, setRules] = useState<any[]>([
    {
      id: 1,
      content:
        "Once the Birds information has been successfully initialized, its base Elo will be automatically put at 1000/ V.I.P accounts are granted access as a participant to all matches. They are not bound or required to follow Elo-related policies of the group/room they wish to join",
    },
    {
      id: 2,
      content:
        "Match's information between 2 players must be updated once finished. If no updates are made within 24 hours, the match will be canceled to strive for sportsmanship between players, please record the match properly for transparency purposes. If there are any mistakes, or misbehaviors in regard to providing results. The Admin will have basic foundations as well as evidence to decide the winner.",
    },
    {
      id: 3,
      content:
        "For those who provide false information about the match, each mistake will result in one warning. If the 3rd warning may occur, we will enforce a ban penalty.",
    },
  ]);
  return (
    <RuleSectionWrapper id="rules">
      <ImageComponent
        src="https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmlyZCUyMGFydHxlbnwwfHwwfHw%3D&w=1000&q=80"
        width="40%"
      ></ImageComponent>
      <RuleBlockWrapper>
        <h1>Common Rules</h1>
        <ul>
          {rules.map((rule) => (
            <li key={rule.id}>{rule.content}</li>
          ))}
        </ul>
      </RuleBlockWrapper>
    </RuleSectionWrapper>
  );
};

export default RuleSection;
