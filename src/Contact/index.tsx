import { BsTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import Section from "../Commons/Section";
import Spacer from "../Commons/Spacer";
import { MIN_MARGIN } from "../constants";

interface Props {
  divRef: React.MutableRefObject<HTMLDivElement | null>;
}

const Contact: React.FC<Props> = ({ divRef }) => {
  return (
    <Section title="Kontakt" divRef={divRef}>
      <div className="row">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <BsTelephoneFill size={17} />
          <Spacer height={MIN_MARGIN} />
          <HiMail size={20} />
        </div>
        <Spacer width={MIN_MARGIN} />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <p>+49 1742089072</p>
          <Spacer height={MIN_MARGIN} />
          <p>b.friedebold@gmx.de</p>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
