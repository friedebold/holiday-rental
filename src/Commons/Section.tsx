import { HEADER_HEIGHT, MARGIN } from "../constants";

interface Props {
  title: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
  divRef?: React.MutableRefObject<HTMLDivElement | null>;
}

const Section: React.FC<Props> = ({ title, children, style, divRef }) => {
  return (
    <div style={{padding: `0px ${MARGIN}px`}}>
      <section style={{ alignItems: "flex-start", scrollMargin: HEADER_HEIGHT, ...style }} ref={divRef}>
        <h2 style={{ alignSelf: "center" }}>{title}</h2>
        <div style={{ height: 40 }} />
        {children}
      </section>
    </div>
  );
};

export default Section;
