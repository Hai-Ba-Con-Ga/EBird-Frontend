import React, { useState } from "react";
import ImageComponent from "../../common/image/ImageComponent";
import { RuleBlockWrapper, RuleSectionWrapper } from "./RuleSection.style";

const RuleSection = () => {
  const [rules, setRules] = useState<any[]>([
    {
      id: 1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem dolores excepturi reiciendis voluptatum quam quaerat incidunt quae cumque eaque expedita, veritatis eum explicabo",
    },
    {
      id: 2,
      content:
        "ipsum repellendus necessitatibus fuga quisquam minus impedit eveniet repellat. Nulla neque similique nam sequi veritatis illo voluptates quaerat. Reprehenderit quos molestiae, recusandae tenetur nam excepturi error?",
    },
    {
      id: 3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem dolores excepturi reiciendis voluptatum quam quaerat incidunt quae cumque eaque expedita, veritatis eum explicabo",
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
