import ProfilePic from "../../../profile-pic/ProfilePic";
import { Close, Wrapper } from "./SearchItemStyles";
import Me from "../../../../img/profilePics/me.jpg";

const SearchItem = () => {
  return (
    <Wrapper>
      <ProfilePic pic={Me} w={50} hasStory={false} />
      <div className="flex col" style={{ alignSelf: "center" }}>
        <h4>carryshout</h4>
        <p>Peter Babej</p>
      </div>
      <Close>✖</Close>
    </Wrapper>
  );
};

export default SearchItem;
