import { Posts } from "../../components/posts/Posts";
import { ProfileSection } from "../../components/profile-section/ProfileSection";
import Stories from "../../components/stories/Stories";
import { SuggestionSection } from "../../components/suggestion-section/SuggestionSection";
import { Wrapper } from "./FeedStyles";
import { Footer } from "../../components/footer/Footer";

const Feed: React.FC = () => {
  return (
    <Wrapper>
      <div className="posts">
        <Stories />
        <Posts />
      </div>
      <div
        className="suggestions"
        style={{ marginLeft: "2rem", position: "relative" }}
      >
        <div style={{ position: "fixed", width: "18rem" }}>
          <ProfileSection />
          <SuggestionSection />
          <Footer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Feed;
