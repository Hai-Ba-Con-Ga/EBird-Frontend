import React, { useState } from "react";
import ImageComponent from "../../common/image/ImageComponent";
import { RuleBlockWrapper, RuleSectionWrapper } from "./RuleSection.style";

const RuleSection = () => {
  const [rules, setRules] = useState<any[]>([
    {
      id: 1,
      content:
        "As an official member of Globird, you must agree to all our rules and conditions regarding Fair Play and our Privacy Policy. Once you have accepted Globird policies, further account creation should be proceeded, choose an appropriate username and enjoy your journey.",
    },
    {
      id: 2,
      content:
        "Your username will represent your online identity. You cannot use chosen usernames and it must not be vulgar, or bearing inappropriate intentions, as well as violating our Terms of Service. False information is not allowed in the signing in process.",
    },
    {
      id: 3,
      content:
        "Cheating is prohibited under all circumstances. If violations of the Fair Play Policies are discovered, we will confiscate your Elo points accordingly. Further violations will result in account suspension or be banned from participating future tournaments.",
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
