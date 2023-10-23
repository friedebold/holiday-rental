import Spacer from "../Commons/Spacer";
import FiveStars from "../assets/fiveStars.png";
import { MARGIN, MIN_MARGIN } from "../constants";
import { text } from "./text";

interface Props {}

const Reviews: React.FC<Props> = ({}) => {
  return (
    <>
      <div style={{ padding: MARGIN }}>
        {text.map((t, idx) => {
          const { name, desc } = t;
          return (
            <div key={idx}>
              <div
                style={{
                  borderRadius: 20,
                  padding: 20,
                  backgroundColor: "#ffffffe3",
                  margin: "auto",
                }}
              >
                <p>{desc}</p>
                <Spacer height={MIN_MARGIN} />
                <div
                  className="row"
                  style={{ justifyContent: "space-between" }}
                >
                  <p>{name}</p>
                  <img src={FiveStars} height={20} />
                </div>
              </div>
              <Spacer height={15} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
