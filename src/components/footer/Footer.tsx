import { useState } from "react";
import { Copy, Dot, Li, Link } from "./FooterStyles";

export const Footer: React.FC = () => {
  const [links, setLinks] = useState([
    "About",
    "Help",
    "Press",
    "API",
    "Jobs",
    "Privacy",
    "Terms",
    "Locations",
    "Language",
  ]);
  return (
    <div className="flex col">
      <ul className="flex" style={{ flexWrap: "wrap" }}>
        {links &&
          links.map((l: string) => (
            <Li style={{ margin: ".1rem" }}>
              <Link href="#">{l}</Link>
              <Dot>.</Dot>
            </Li>
          ))}
      </ul>
      <Copy>© 2022 INSTAGRAM FROM META</Copy>
    </div>
  );
};
