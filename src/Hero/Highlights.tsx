import React from "react";
import { IoIosBicycle, IoIosWalk } from "react-icons/io";
import { IoBedOutline } from "react-icons/io5";
import Spacer from "../Commons/Spacer";
import Whirlpool from "../assets/whirlpool.png";
import { MIN_MARGIN } from "../constants";

interface Props {
  scrollToRef: (refStr: string) => void;
}

const Highlights: React.FC<Props> = ({  scrollToRef }) => {
  return (
    <div className="row" style={{ zIndex: 1, height: "100%" }}>
      <div className="hero-box"  onClick={() => scrollToRef('gallery')}>
        <h4>10 Betten</h4>
        <Spacer height={30} />
        <IoBedOutline size={40} />
      </div>

      <Spacer width={10} />

      <div className="hero-box" onClick={() => scrollToRef("detail")}>
        <h4>Whirlpool & Sauna</h4>
        <Spacer height={10} />
        <img src={Whirlpool} height={40} width={40} />
      </div>

      <Spacer width={MIN_MARGIN} />

      <div className="hero-box" onClick={() => scrollToRef('location')}>
        <div>
          <h4>Yachthafen</h4>
          <div className="row">
            <IoIosWalk size={24} />
            <h4>2 min</h4>
          </div>
        </div>
        <Spacer width={MIN_MARGIN} />
        <div>
          <h4>Ostsee</h4>
          <div className="row">
            <IoIosBicycle size={24} />
            <h4>8 min</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
