import { useEffect } from "react";
import { Wrapper } from "./NewPostsIndicatorStyles";
import $ from "jquery";

const NewPostsIndicator: React.FC<{ loadPosts: () => void }> = ({
  loadPosts,
}) => {
  useEffect(() => {
    $("#indicator").animate({ top: "1rem" }, 200);
  }, []);
  return (
    <Wrapper id="indicator" onClick={loadPosts}>
      New Posts
    </Wrapper>
  );
};

export default NewPostsIndicator;
