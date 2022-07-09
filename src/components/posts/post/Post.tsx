import React, { useState } from "react";
import ProfilePic from "../../profile-pic/ProfilePic";
import { Icon, Nickname } from "../PostsStyle";
import { PhotoSlider } from "./photoSlider/PhotoSlider";
import { Point } from "./point/Point";
import blackHeart from "../../../img/icons/heart.png";
import redHeart from "../../../img/icons/heart-red.png";
import comment from "../../../img/icons/chat.png";
import bookmark from "../../../img/icons/bookmark-white.png";
import bookmarkBlack from "../../../img/icons/bookmark.png";
import { CommentSection } from "./commentSection/CommentSection";
import { AddComment } from "./addComment/AddComment";

interface IProps {
  photos: String[];
  idx: number;
}
export const Post: React.FC<IProps> = ({ photos, idx }) => {
  const [photoCount, setPhotoCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);
  const [comments, setComments] = useState([
    {
      name: "Jessica",
      text: "Yay this is such a beautiful picture of you!",
    },
  ]);

  const handleSetPhotoCount = (count: number) => {
    setPhotoCount(count);
  };
  return (
    <React.Fragment>
      <div className="flex" style={{ margin: ".5rem" }}>
        <ProfilePic hasStory={true} w={30} />
        <Nickname>carryshout</Nickname>
      </div>
      <PhotoSlider
        onLiked={() => setLiked(true)}
        photos={photos}
        photoCount={photoCount}
        setPhotoCount={(count: number) => handleSetPhotoCount(count)}
      />
      <div style={{ padding: ".7rem" }}>
        <div className="flex btw" style={{ padding: "0 0 .7rem 0" }}>
          <div className="flex">
            {!liked && (
              <Icon
                src={blackHeart}
                red={false}
                onClick={() => setLiked(true)}
              />
            )}
            {liked && (
              <Icon src={redHeart} red={true} onClick={() => setLiked(false)} />
            )}
            &nbsp; &nbsp;
            <Icon src={comment} red={false} />
          </div>
          <div className="flex">
            {photos &&
              photos.map((_, index) => (
                <Point active={index === photoCount ? true : false} />
              ))}
          </div>
          {!bookmarked && (
            <Icon
              src={bookmark}
              red={false}
              onClick={() => setBookmarked(true)}
            />
          )}
          {bookmarked && (
            <Icon
              src={bookmarkBlack}
              red={false}
              onClick={() => setBookmarked(false)}
            />
          )}
        </div>
        {!liked && (
          <strong style={{ padding: "0 0 .7rem 0" }}>
            Be first one to like!
          </strong>
        )}
        {liked && <strong style={{ padding: "0 0 .7rem 0" }}>1 like</strong>}
        <div>
          <p>
            <strong>carryshout</strong>&nbsp;Some comment
          </p>
        </div>
        <CommentSection comments={comments} />
        <p style={{ fontSize: ".7em", color: "lightgray", marginTop: ".5rem" }}>
          8 HOURS AGO
        </p>
      </div>
      <div style={{ borderBottom: "1px solid #f0f0f0" }} />
      <AddComment idx={idx} />
    </React.Fragment>
  );
};
