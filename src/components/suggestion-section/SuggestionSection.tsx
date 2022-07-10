import { useState } from "react";
import { SuggestionItem } from "./suggestion-item/SuggestionItem";
import { Wrapper } from "./SuggestionSectionStyles";

export const SuggestionSection: React.FC = () => {
  const [sugg, setSugg] = useState([
    "patoooo",
    "julia_antol",
    "gabor_sivy",
    "neznama",
    "anonym",
  ]);

  return (
    <Wrapper>
      <h4 className="suggestionHeader">Suggestions For You</h4>
      {sugg && sugg.map((s: string) => <SuggestionItem data={s} />)}
    </Wrapper>
  );
};
