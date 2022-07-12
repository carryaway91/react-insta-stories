import { useState } from "react";
import { SuggestionItem } from "./suggestion-item/SuggestionItem";
import { Wrapper } from "./SuggestionSectionStyles";
import Person8 from "../../img/profilePics/person8.jpg";
import Person7 from "../../img/profilePics/person7.jpg";
import Person6 from "../../img/profilePics/person6.jpg";
import Person5 from "../../img/profilePics/person5.jpg";
import Person4 from "../../img/profilePics/person4.jpg";

export const SuggestionSection: React.FC = () => {
  const [sugg, setSugg] = useState([
    { name: "anonym", pic: Person8 },
    {
      name: "neznamy",
      pic: Person7,
    },
    {
      name: "gulia_juliaa",
      pic: Person6,
    },
    {
      name: "peteeeeeeer",
      pic: Person5,
    },
    {
      name: "absolutttt",
      pic: Person4,
    },
  ]);

  return (
    <Wrapper>
      <h4 className="suggestionHeader">Suggestions For You</h4>
      {sugg &&
        sugg.map((s: { name: string; pic: string }) => (
          <SuggestionItem data={s} />
        ))}
    </Wrapper>
  );
};
