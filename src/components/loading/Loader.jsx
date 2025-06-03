import { SLoader } from "./SLoader.styled";

const Loader = ({ width, height, borderRadius }) => {
  return (
    <SLoader $width={width} $height={height} $borderRadius={borderRadius} />
  );
};

export default Loader;
