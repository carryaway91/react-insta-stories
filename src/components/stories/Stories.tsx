import { useState, useEffect, useRef } from "react";
import { Arrow } from "../../img/icons/arrow";
import ProfilePic from "../profile-pic/ProfilePic";
import { OuterWrap, RightBtn, WhiteSpacePanel, Wrapper } from "./StoriesStyles";

const Stories: React.FC = () => {
  const [leftHidden, setLeftHidden] = useState(true);
  const [rightHidden, setRightHidden] = useState(false);
  const [left, setLeft] = useState("0rem");
  const [name, setName] = useState("autentickypeter");
  const storiesPanel = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (name.length >= 10) {
      const reducedName = name.slice(0, 10);
      setName(reducedName + "...");
    }
  }, [name]);

  const scrollRight = () => {
    setLeftHidden(false);
    if (storiesPanel.current !== null) {
      const style = window.getComputedStyle(storiesPanel.current, null);
      let width = parseInt(style.getPropertyValue("width"));
      let leftPosition = parseInt(style.getPropertyValue("left"));

      if (width + leftPosition - 100 > 466) {
        setRightHidden(false);
        setLeft(leftPosition - width / 10 + "px");
        if (parseInt(left) - 466 < -Math.abs(width)) {
          setLeft(-Math.abs(width - 446) + "px");
        }
      } else if (width + leftPosition - 100 < 466) {
        setLeft(-Math.abs(width - 446) + "px");
        setRightHidden(true);
      }
    }
  };

  const scrollLeft = () => {
    setRightHidden(false);
    if (storiesPanel.current !== null) {
      const style = window.getComputedStyle(storiesPanel.current, null);
      let width = parseInt(style.getPropertyValue("width"));
      let leftPosition = parseInt(style.getPropertyValue("left"));
      console.log(leftPosition + width / 10);
      if (+leftPosition < 0 && leftPosition + width / 10 < 0) {
        setLeft(leftPosition + width / 10 + "px");
      } else {
        setLeft("0px");
        setLeftHidden(true);
      }
    }
  };
  return (
    <OuterWrap>
      <Wrapper as={Wrapper} ref={storiesPanel} style={{ left: left }}>
        {[...Array(13)].map((s) => (
          <li
            className="flex col"
            style={{
              margin: "0 .4rem",
              alignItems: "center",
            }}
          >
            <ProfilePic hasStory={true} w={66} />
            <p style={{ fontSize: ".7rem" }}>{name}</p>
          </li>
        ))}
      </Wrapper>
      <WhiteSpacePanel></WhiteSpacePanel>
      <Arrow show={!leftHidden} pos="left" click={scrollLeft}>
        Left
      </Arrow>
      <Arrow show={!rightHidden} pos="right" click={scrollRight}>
        Rigth
      </Arrow>
    </OuterWrap>
  );
};

export default Stories;
