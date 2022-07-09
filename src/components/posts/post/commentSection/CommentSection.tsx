import { Comment } from "./comment/Comment";

interface IProps {
  comments: { name: string; text: string }[];
}

export const CommentSection: React.FC<IProps> = ({ comments }) => {
  return (
    <ul>
      {comments &&
        comments.map((c) => (
          <li>
            <Comment data={c} />
          </li>
        ))}
    </ul>
  );
};
