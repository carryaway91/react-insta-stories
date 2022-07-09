import { Img, Inner, StoryCircle, Wrapper } from "./ProfilePicStyles";
import Pic from "../../img/profilePics/me.jpg";
import { Link } from "react-router-dom";

interface IProps {
  w: number;
  hasStory: boolean;
}

const ProfilePic: React.FC<IProps> = ({ w, hasStory }) => {
  return (
    <Wrapper hasStory={hasStory} w={w}>
      {hasStory && (
        <Link to="/stories">
          <Inner w={w}>
            <Img src={Pic} w={w} />
            {hasStory && <StoryCircle w={w}></StoryCircle>}
          </Inner>
        </Link>
      )}

      {!hasStory && (
        <Inner w={w}>
          <Img src={Pic} w={w} />
          {hasStory && <StoryCircle w={w}></StoryCircle>}
        </Inner>
      )}
    </Wrapper>
  );
};

export default ProfilePic;
