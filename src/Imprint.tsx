import Spacer from "./Commons/Spacer";
import { MARGIN, MIN_MARGIN } from "./constants";

interface Props {
  setOpenImprint: React.Dispatch<React.SetStateAction<boolean>>;
}

const Imprint: React.FC<Props> = ({ setOpenImprint }) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "white",
        position: "absolute",
        top: 0,
        zIndex: 100,
        padding: MARGIN,
      }}
    >
      <h2 style={{ textAlign: "end" }} onClick={() => setOpenImprint(false)}>
        x
      </h2>
      <p>Rodica Friedebold</p>
      <Spacer height={MIN_MARGIN} />
      <p>Elisabeth-Mara-Straße 7</p>
      <p>10117 Berlin</p>
      <p>Deutschland</p>
      <Spacer height={MIN_MARGIN} />
      <p>Telefon: +49 1742089072</p>
      <p>Email: info@luxus-ferienhaus-usedom.de</p>
      <Spacer height={MIN_MARGIN} />
      <p>Aufsichtsbehörde: Finanzamt Berlin Tiergarten/Mitte</p>
      <p>Steuer-ID: 34-294-00777</p>
    </div>
  );
};

export default Imprint;
