import { useEffect, useState } from "react";
import {
  HEADER_HEIGHT,
  HIGHLIGHT_HEIGHT,
  MARGIN,
  MAX_WIDTH,
  MIN_MARGIN,
} from "../constants";
import Highlights from "./Highlights";
import VideoBox from "./VideoBox";

interface Props {
  scrollY: number;
  scrollToRef: (refStr: string) => void;
  divRef: any
}

export interface Dimensions {
  width: number | string;
  height: number | string;
  borderRadius: number | string;
  left: number | string;
  top: number | string;
  scale: number;
  top2: number | string;
}
export const PROGRESS_LIMIT = 800;

const Hero: React.FC<Props> = ({ scrollY, scrollToRef, divRef }) => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: "100vw",
    height: "100vh",
    borderRadius: 0,
    left: 0,
    top: 0,
    scale: 1,
    top2: 0,
  });

  useEffect(() => {
    let progress = 0;
    progress = Math.min(scrollY, PROGRESS_LIMIT) / PROGRESS_LIMIT;

    const width =
      window.innerWidth -
      (60 + Math.max(0, window.innerWidth - MAX_WIDTH)) * progress;
    const height =
      window.innerHeight -
      (HEADER_HEIGHT + MIN_MARGIN + HIGHLIGHT_HEIGHT + MARGIN + MARGIN) *
        progress;
    const borderRadius = 20 * progress;
    const left =
      (30 + Math.max(0, (window.innerWidth - MAX_WIDTH) / 2)) * progress;
    const top = Math.min(scrollY, PROGRESS_LIMIT) + 100 * progress;

    const scale = (window.innerWidth - 60 * progress) / window.innerWidth;
    const top2 = Math.min(scrollY, PROGRESS_LIMIT);

    setDimensions({ width, height, borderRadius, left, top, scale, top2 });
  }, [scrollY]);

  return (
    <div
      style={{
        margin: "0px 30px",
        paddingBottom: 30,
        height: "100vh",
        alignItems: "stretch",
        display: "flex",
        flexDirection: "column",
        zIndex: 0,
        marginBottom: PROGRESS_LIMIT,
        
      }}
      ref={divRef}
    >
      <VideoBox {...{ scrollY }} {...{ dimensions }} />
      <div style={{ display: "flex", flex: 1 }}></div>
      {/* <Spacer height={10} /> */}
      <div
        style={{
          top: dimensions.top,
          transform: `translate(0px, ${dimensions.top2}px)`,
          animation: "fadein 1s",
          height: HIGHLIGHT_HEIGHT,
        }}
      >
        <Highlights {...{ scrollToRef}} />
      </div>
    </div>
  );
};

export default Hero;
