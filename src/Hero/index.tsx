import {
  HEADER_HEIGHT,
  HIGHLIGHT_HEIGHT,
  MARGIN,
  MAX_WIDTH,
  MIN_MARGIN,
} from "../constants";
import Highlights from "./Highlights";

import {
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import VideoBox from "./VideoBox";

interface Props {
  scrollToRef: (refStr: string) => void;
  divRef: any;
}

export const PROGRESS_LIMIT = 800;

const Hero: React.FC<Props> = ({ scrollToRef, divRef }) => {
  const { scrollY } = useScroll();

  const height = useMotionValue(window.innerHeight);
  const width = useMotionValue(window.innerWidth);
  const top = useMotionValue(0);
  const left = useMotionValue(0);
  const borderRadius = useMotionValue(0);

  const position = useMotionValue("fixed");
  const topHighlight = useMotionValue(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    let progress = Math.min(latest, PROGRESS_LIMIT) / PROGRESS_LIMIT;

    height.set(
      window.innerHeight -
        (HEADER_HEIGHT + MIN_MARGIN + HIGHLIGHT_HEIGHT + MARGIN + MARGIN) *
          progress
    );

    width.set(
      window.innerWidth -
        (60 + Math.max(0, window.innerWidth - MAX_WIDTH)) * progress
    );

    top.set(latest > PROGRESS_LIMIT ? 100 + PROGRESS_LIMIT : 100 * progress);

    left.set(
      (30 + Math.max(0, (window.innerWidth - MAX_WIDTH) / 2)) * progress
    );

    borderRadius.set(20 * progress);

    topHighlight.set(latest > PROGRESS_LIMIT ? PROGRESS_LIMIT : 0);
    position.set(latest > PROGRESS_LIMIT ? "initial" : "fixed");
  });

  return (
    <div
      style={{
        margin: "0px 30px",
        paddingBottom: 30,
        height: "100vh",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        marginBottom: PROGRESS_LIMIT,
      }}
      ref={divRef}
    >
      <motion.div
        style={{
          position: position,
          display: "flex",
          borderRadius: borderRadius,
          width: width,
          height: height,
          // left: 0,
          translateY: top,
          zIndex: -1,
          // translateX: left,
          overflow: "hidden",
        }}
        transition={{
          x: { type: "spring", stiffness: 100 },
          duration: 0.8,
          delay: 0.2,
        }}
      >
        <VideoBox />
      </motion.div>
      <div style={{ display: "flex", flex: 1 }} />
      <motion.div
        style={{
          zIndex: 1,
          position: position,
          bottom: MARGIN,
          translateY: topHighlight,
          display: "flex",
          width:
            window.innerWidth -
            (60 + Math.max(0, window.innerWidth - MAX_WIDTH)),
          height: HIGHLIGHT_HEIGHT,
        }}
      >
        <Highlights {...{ scrollToRef }} />
      </motion.div>
    </div>
  );
};

export default Hero;
