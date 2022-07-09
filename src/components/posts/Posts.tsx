import { useState } from "react";
import { Wrapper } from "./PostsStyle";
import { Post } from "./post/Post";

export const Posts: React.FC = () => {
  const [photos, setPhotos] = useState([
    "https://thumbs.dreamstime.com/b/happy-person-portrait-smiling-woman-tanned-skin-curly-hair-happy-person-portrait-smiling-young-friendly-woman-197501184.jpg",
    "https://www.gannett-cdn.com/-mm-/80bf00532338e53cd5647f9007be2b345371aebc/c=0-25-320-452/local/-/media/Montgomery/2014/08/09/mckinney.jpg?width=320&height=427&fit=crop&format=pjpg&auto=webp",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  ]);
  return (
    <div className="flex col">
      {[...Array(5)].map((_, i) => (
        <Wrapper>
          <Post photos={photos} key={i} idx={i} />
        </Wrapper>
      ))}
    </div>
  );
};
