import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Spacer from "../Commons/Spacer";

interface Props {
  dropdown: { title: string; desc: string }[];
}

const Dropdown: React.FC<Props> = ({ dropdown }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div
      style={{
        borderRadius: 20,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {dropdown.map((item, idx) => {
        const { title, desc } = item;
        const isOpen = openIndex == idx;
        return (
          <div key={idx}>
            <div
              className="row"
              style={{ justifyContent: "space-between" }}
              onClick={() => {
                if (isOpen) setOpenIndex(null);
                else setOpenIndex(idx);
              }}
            >
              <h3 style={{ paddingTop: 20, paddingBottom: 20 }}>{title}</h3>
              {isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </div>
            {isOpen && (
              <>
                <p>{desc}</p>
                <Spacer height={20} />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Dropdown;
