import React from "react";
import { Wrapper } from "./CategoryStyles";
import PostsIcon from "../../img/icons/posts";
import SavedIcon from "../../img/icons/bookmark-white.png";

interface IProps {
  data: string;
}
const Category: React.FC<IProps> = ({ data }) => {
  return (
    <Wrapper>
      {data && data === "POSTS" ? (
        <PostsIcon />
      ) : (
        <img src={SavedIcon} alt="saved" width={11} height={11} />
      )}
      {data}
    </Wrapper>
  );
};

export default Category;
