import { Link } from "react-router-dom";
import ProfilePic from "../profile-pic/ProfilePic";
import { Inner, Name, Nickname, Switch, Wrapper } from "./ProfileSectionStyles";

export const ProfileSection: React.FC = () => {
  return (
    <Wrapper>
      <ProfilePic hasStory={false} w={66} />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "80%",
        }}
      >
        <Inner>
          <Link
            to="/carryshout"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Nickname>carryshout</Nickname>
          </Link>
          <Name>Peter Babej</Name>
        </Inner>
        <Switch>Switch</Switch>
      </div>
    </Wrapper>
  );
};
