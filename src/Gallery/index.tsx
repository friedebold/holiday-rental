import { useState } from "react";
import ImageViewer from "../Commons/ImageViewer";
import Section from "../Commons/Section";
import Spacer from "../Commons/Spacer";
import FirstFloor from "../assets/firstFloor.webp";
import SecondFloor from "../assets/secondFloor.webp";
import { MARGIN, MAX_WIDTH } from "../constants";
import Floor from "./Floor";

interface Props {
  divRef: any
}

const Gallery: React.FC<Props> = ({divRef}) => {
  const [imgIndex, setImgIndex] = useState(0);

  const firstFloorPositions = [
    { top: 0.4, left: 0.39 },
    { top: 0.54, left: 0.39 },
    { top: 0.01, left: 0.6 },
    { top: 0.01, left: 0.2 },
    { top: 0.01, left: 0.37 },
    { top: 0.01, left: 0.07 },
    { top: 0.62, left: 0.73 },
    { top: 0.71, left: 0.61 },
    { top: 0.87, left: 0.39 },
  ];

  const secondFloorPositions = [
    { top: 0.25, left: 0.5 },
    { top: 0.48, left: 0.57 },
    { top: 0.83, left: 0.49 },
    { top: 0.61, left: 0.35 },
  ];

  return (
    <Section title="Das Haus" divRef={divRef}>
      <Floor
        {...{ imgIndex }}
        {...{ setImgIndex }}
        src={FirstFloor}
        imagePositions={firstFloorPositions}
        containerWidth={Math.min(window.innerWidth, MAX_WIDTH) - MARGIN * 2}
        aspectRatio={0.762}
      />
      <Spacer height={MARGIN} />
      <ImageViewer
        type="gallery"
        imgCount={13}
        {...{ imgIndex }}
        {...{ setImgIndex }}
      />
      <Spacer height={MARGIN} />
      <Floor
        {...{ imgIndex }}
        {...{ setImgIndex }}
        src={SecondFloor}
        imagePositions={secondFloorPositions}
        containerWidth={Math.min(window.innerWidth, MAX_WIDTH) - MARGIN * 2}
        aspectRatio={0.568}
        indexOffset={9}
      />
    </Section>
  );
};

export default Gallery;
