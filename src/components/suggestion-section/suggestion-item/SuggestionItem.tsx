import ProfilePic from "../../profile-pic/ProfilePic";
import { Follow, Wrapper } from "./SuggestionItemStyles";

interface IProps {
  data: string;
}
export const SuggestionItem: React.FC<IProps> = ({ data }) => {
  return (
    <Wrapper className="btw">
      <div className="flex">
        <ProfilePic hasStory={false} w={38} />
        <div id="inner">
          <h5 className="name">{data}</h5>
          <p>Suggested for you</p>
        </div>
      </div>
      <Follow>Follow</Follow>
    </Wrapper>
  );
};
