import React from "react";
import { BiCheckboxSquare } from "react-icons/bi";

interface Props {
  imagePositions: { top: number; left: number }[];
  imgIndex: number;
  src: any;
  setImgIndex: React.Dispatch<React.SetStateAction<number>>;
  containerWidth: number;
  aspectRatio: number;
  indexOffset?: number;
}

const Floor: React.FC<Props> = ({
  imgIndex,
  setImgIndex,
  src,
  imagePositions,
  containerWidth,
  aspectRatio,
  indexOffset,
}) => {
  return (
    <div style={{ position: "relative" }}>
      {imagePositions.map((position, idx) => {
        const { top, left } = position;
        if (indexOffset) idx = idx + indexOffset;
        const isActive = idx == imgIndex;
        return (
          <BiCheckboxSquare
            size={35}
            style={{
              position: "absolute",
              backgroundColor: isActive ? "gold" : "transparent",
              borderRadius: 10,
              top: top * containerWidth * aspectRatio,
              left: left * containerWidth,
            }}
            onClick={() => setImgIndex(idx)}
            key={idx}
          />
        );
      })}
      <img src={src} height={containerWidth * aspectRatio} width={"100%"} />
    </div>
  );
};

export default Floor;
