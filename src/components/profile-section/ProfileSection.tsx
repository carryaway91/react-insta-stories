import { Link } from "react-router-dom";
import ProfilePic from "../profile-pic/ProfilePic";
import { Inner, Name, Nickname, Switch, Wrapper } from "./ProfileSectionStyles";
import Me from "../../img/profilePics/me.jpg";

export const ProfileSection: React.FC = () => {
  return (
    <Wrapper>
      <ProfilePic pic={Me} hasStory={false} w={66} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Inner>
          <Nickname>carryshout</Nickname>
          <Name>Peter Babej</Name>
        </Inner>
        <Switch>Switch</Switch>
      </div>
    </Wrapper>
  );
};
