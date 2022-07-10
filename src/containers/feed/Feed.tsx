import { Posts } from "../../components/posts/Posts";
import { ProfileSection } from "../../components/profile-section/ProfileSection";
import Stories from "../../components/stories/Stories";
import { SuggestionSection } from "../../components/suggestion-section/SuggestionSection";
import { Wrapper } from "./FeedStyles";
import { Footer } from "../../components/footer/Footer";
import NewPostsIndicator from "../../components/posts/new-posts-indicator/NewPostsIndicator";
import Loader from "../../components/shared/loader/Loader";
import { useState } from "react";

const Feed: React.FC = () => {
  const [loadPosts, setLoadPosts] = useState(false);

  const handleLoadingPosts = () => {
    setLoadPosts(true);
    setTimeout(() => {
      setLoadPosts(false);
    }, 2000);
  };
  return (
    <Wrapper>
      <div style={{ position: "relative", display: "inline" }}>
        <Loader />
        <div
          className={loadPosts ? "slideDown" : "posts"}
          style={{ position: "relative" }}
        >
          <Stories />
          <Posts />
        </div>
        {!loadPosts && (
          <NewPostsIndicator loadPosts={() => handleLoadingPosts()} />
        )}
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
