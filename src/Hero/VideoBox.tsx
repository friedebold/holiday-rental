import { Dimensions } from ".";
import video from "../assets/beach.mp4";
/* import image from "../assets/gallery/2.webp"; */

interface Props {
  scrollY: number;
  dimensions: Dimensions;
}

const VideoBox: React.FC<Props> = ({ scrollY, dimensions }) => {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        borderRadius: dimensions.borderRadius,
        width: dimensions.width,
        height: dimensions.height,
        left: 0,
        transform: `translate(${dimensions.left}px, ${dimensions.top}px)`,
        // left: dimensions.left,
        // top: dimensions.top,
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <video width="100%" height="100%" autoPlay loop muted>
        <source src={video}></source>
      </video>
      {/* <img src={image} height={220} /> */}
    </div>
  );
};

export default VideoBox;
