import ProfilePic from "../../../profile-pic/ProfilePic";
import { Close, Wrapper } from "./SearchItemStyles";

const SearchItem = () => {
  return (
    <Wrapper>
      <ProfilePic w={50} hasStory={false} />
      <div className="flex col" style={{ alignSelf: "center" }}>
        <h4>carryshout</h4>
        <p>Peter Babej</p>
      </div>
      <Close>✖</Close>
    </Wrapper>
  );
};

export default SearchItem;
