import ProfilePic from "../profile-pic/ProfilePic";
import { EditButton, Wrapper } from "./ProfileInfoStyles";
import Me from "../../img/profilePics/me.jpg";

const ProfileInfo = () => {
  return (
    <Wrapper>
      <ProfilePic pic={Me} w={190} hasStory={false}></ProfilePic>
      <div className="flex col btw info">
        <div className="flex">
          <h2>carryshout</h2>
          <EditButton>Edit profile</EditButton>
        </div>
        <div className="flex">
          <p>
            <strong>0</strong> posts
          </p>
          <p>
            <strong>0</strong> followers
          </p>
          <p>
            <strong>0</strong> following
          </p>
        </div>
        <div className="flex col">
          <h3>Peter Babej</h3>
          <p>My cool description</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ProfileInfo;
