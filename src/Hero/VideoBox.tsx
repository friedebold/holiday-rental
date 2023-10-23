import video from "../assets/beach.mp4";
/* import image from "../assets/gallery/2.webp"; */

interface Props {}

const VideoBox: React.FC<Props> = ({}) => {
  return (
    <video width="100%" height="100%" autoPlay loop muted>
      <source src={video}></source>
    </video>
    /* <img src={image} height={220} /> */
  );
};

export default VideoBox;
