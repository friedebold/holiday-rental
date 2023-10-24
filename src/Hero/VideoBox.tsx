import video from "../assets/beach.mp4";
/* import image from "../assets/gallery/2.webp"; */

interface Props {}

const VideoBox: React.FC<Props> = () => {
  return (
    <video
      width="100%"
      height="100%"
      autoPlay
      loop
      muted
      controls={false}
      playsInline
    >
      <source src={video}></source>
    </video>
  );
};

export default VideoBox;
