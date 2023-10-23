import { useEffect, useState } from "react";
import { PROGRESS_LIMIT } from "./Hero";
import Logo from "./assets/logo.webp";
import { APPROX_HEADER_CONTENT_WIDTH, MAX_WIDTH } from "./constants";

interface Props {
  scrollY: number;
  scrollToRef: (refStr: string) => void;
}

const Header: React.FC<Props> = ({ scrollY, scrollToRef }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(Math.min((scrollY - PROGRESS_LIMIT) * 0.002, 0.2));
  }, [scrollY]);

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px 30px",
          position: "fixed",
          zIndex: 100,
        }}
        className="row"
      >
        {window.innerWidth < APPROX_HEADER_CONTENT_WIDTH + MAX_WIDTH && (
          <div
            style={{
              position: "absolute",
              backgroundColor: "black",
              height: "100%",
              width: "100vw",
              opacity: opacity,
              left: 0,
              zIndex: -10,
            }}
          />
        )}
        <img
          src={Logo}
          height={70}
          onClick={() => scrollToRef("home")}
          style={{ cursor: "pointer" }}
        />
        <div
          style={{
            backgroundColor: "white",
            borderRadius: 20,
            display: "flex",
            padding: "20px",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => scrollToRef("contact")}
        >
          <h4>Jetzt buchen!</h4>
        </div>
      </header>
    </>
  );
};

export default Header;
