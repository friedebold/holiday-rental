import { useState } from "react";
import ImageViewer from "../Commons/ImageViewer";
import Section from "../Commons/Section";
import Spacer from "../Commons/Spacer";
import { text } from "./text";

interface Props {
  divRef: any
}

const Location: React.FC<Props> = ({divRef}) => {
  const { desc1, desc2, desc3 } = text;
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <Section title="Lage" divRef={divRef}>
      <p>{desc1}</p>
      <Spacer height={40} />
      <ImageViewer
        type="location"
        imgCount={3}
        {...{ imgIndex }}
        {...{ setImgIndex }}
      />
      <Spacer height={20} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          padding: 20,
          borderRadius: 20,
          boxShadow: "0px 0px 10px 0px rgba(151, 151, 151, 0.75)",
          cursor: "pointer",
        }}
        onClick={() =>
          window.open("https://maps.app.goo.gl/mYymtZdnvykKBjGL8", "_blank")
        }
      >
        <p>Google Maps öffnen</p>
      </div>
      <Spacer height={40} />
      <p>{desc2}</p>
      <Spacer height={40} />
      <p>{desc3}</p>
    </Section>
  );
};

export default Location;
