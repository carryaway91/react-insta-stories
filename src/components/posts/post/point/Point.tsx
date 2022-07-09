import { Wrapper } from "./PointStyles";

interface IProps {
  active: boolean;
}

export const Point: React.FC<IProps> = ({ active }) => {
  return <Wrapper active={active}></Wrapper>;
};
