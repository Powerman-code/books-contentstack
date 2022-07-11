import { Circles } from "react-loader-spinner";
import { SCWrapper } from "./Spinner.Styled";

const Spinner = ({ height, width, color }) => {
  return (
    <SCWrapper>
      <Circles
        height={height}
        width={width}
        color={color}
        ariaLabel="loading"
      />
    </SCWrapper>
  );
};

export default Spinner;
