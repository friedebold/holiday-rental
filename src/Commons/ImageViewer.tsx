import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { APPROX_HEADER_CONTENT_WIDTH, MARGIN, MAX_WIDTH } from "../constants";

interface Props {
  type: string;
  imgCount: number;
  imgIndex: number;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
}

const ImageViewer: React.FC<Props> = ({
  type,
  imgCount,
  imgIndex,
  setImgIndex,
}) => {
  let image = require(`../assets/${type}/${imgIndex}.webp`);

  const MARGINS =
    window.innerWidth > MAX_WIDTH + APPROX_HEADER_CONTENT_WIDTH
      ? MARGIN * 4
      : MARGIN * 2;

  return (
    <div className="row">
      <IoIosArrowBack
        style={{
          position: "absolute",
          left: 0,
          width: MARGIN,
          height: 100,
        }}
        size={30}
        onClick={() => {
          setImgIndex((currIdx) => (currIdx - 1 + imgCount) % imgCount);
        }}
      />
      <img
        src={image}
        width={Math.min(window.innerWidth, MAX_WIDTH) - MARGINS}
        height={(Math.min(window.innerWidth, MAX_WIDTH) - MARGINS) / 1.5}
        style={{ borderRadius: 10, objectFit: "cover" }}
      />
      <IoIosArrowForward
        style={{
          position: "absolute",
          right: 0,
          width: MARGIN,
          height: 100,
        }}
        size={30}
        onClick={() => {
          setImgIndex((currIdx) => (currIdx + 1) % imgCount);
        }}
      />
    </div>
  );
};

export default ImageViewer;
