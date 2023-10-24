import {
  APPROX_HEADER_CONTENT_WIDTH,
  HEADER_HEIGHT,
  MARGIN,
  MAX_WIDTH,
} from "../constants";

interface Props {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  divRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const Section: React.FC<Props> = ({ title, children, style, divRef }) => {
  return (
    <div
      style={{
        padding:
          window.innerWidth > MAX_WIDTH + APPROX_HEADER_CONTENT_WIDTH
            ? `0px ${MARGIN}px`
            : 0,
      }}
    >
      <section
        style={{
          alignItems: "flex-start",
          scrollMargin: HEADER_HEIGHT,
          ...style,
        }}
        ref={divRef}
      >
        <h2 style={{ alignSelf: "center" }}>{title}</h2>
        <div style={{ height: 40 }} />
        {children}
      </section>
    </div>
  );
};

export default Section;
