import { useState } from "react";
import Category from "../../components/category/Category";
import ProfileInfo from "../../components/profile-info/ProfileInfo";
import { Wrapper } from "./ProfileStyles";
import Posts from "../../img/icons/posts";
import Bookmark from "../../img/icons/bookmark-white.png";
const Profile = () => {
  const [categories, setCategories] = useState(["POSTS", "SAVED"]);
  return (
    <Wrapper>
      <ProfileInfo></ProfileInfo>
      <hr style={{ margin: "2rem 0 0 0" }} />
      <div className="flex">
        {categories &&
          categories.map((c: string, i: number) => (
            <Category data={c} key={i} />
          ))}
      </div>
    </Wrapper>
  );
};

export default Profile;
