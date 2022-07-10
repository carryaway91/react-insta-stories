interface IProps {
  data: { name: string; text: string };
}

export const Comment: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex">
      <h4>{data.name}</h4>&nbsp;<p>{data.text}</p>
    </div>
  );
};
