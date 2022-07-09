interface IProps {
  data: { name: string; text: string };
}

export const Comment: React.FC<IProps> = ({ data }) => {
  return (
    <div className="flex">
      <strong>{data.name}</strong>&nbsp;<p>{data.text}</p>
    </div>
  );
};
