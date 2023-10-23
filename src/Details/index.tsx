import { useState } from "react";
import ImageViewer from "../Commons/ImageViewer";
import Section from "../Commons/Section";
import Spacer from "../Commons/Spacer";
import Dropdown from "./Dropdown";
import { text } from "./text";

interface Props {
  divRef: any
}

const Details: React.FC<Props> = ({divRef}) => {
  const { title, desc, dropdown } = text;

  const [imgIndex, setImgIndex] = useState(0);

  return (
    <Section title="Ausstattung" divRef={divRef}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <Spacer height={20} />
      <ImageViewer
        imgCount={3}
        {...{ imgIndex }}
        {...{ setImgIndex }}
        type="details"
      />
      <Dropdown {...{ dropdown }} />
    </Section>
  );
};

export default Details;
