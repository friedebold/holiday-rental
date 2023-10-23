import "./App.css";

import { useEffect, useRef, useState } from "react";
import Spacer from "./Commons/Spacer";
import Contact from "./Contact";
import Details from "./Details";
import Gallery from "./Gallery";
import Header from "./Header";
import Hero from "./Hero";
import Imprint from "./Imprint";
import Location from "./Location";
import Reviews from "./Reviews";
import { MARGIN, MAX_WIDTH, MIN_MARGIN } from "./constants";

interface Props {}

export interface Refs {
  gallery: React.MutableRefObject<null | HTMLDivElement>;
  detail: React.MutableRefObject<null | HTMLDivElement>;
  location: React.MutableRefObject<null | HTMLDivElement>;
  contact: React.MutableRefObject<null | HTMLDivElement>;
}

const App: React.FC<Props> = ({}) => {
  const [scrollY, setScrollY] = useState(0);
  const [openImprint, setOpenImprint] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollY(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const refs: any = {
    home: useRef<null | HTMLDivElement>(null),
    gallery: useRef<null | HTMLDivElement>(null),
    detail: useRef<null | HTMLDivElement>(null),
    location: useRef<null | HTMLDivElement>(null),
    contact: useRef<null | HTMLDivElement>(null),
  };

  const scrollToRef = (ref: string) => {
    refs[ref].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {openImprint == false ? (
        <>
          <Header {...{ scrollY }} {...{ scrollToRef }} />
          <div className="App" style={{ maxWidth: MAX_WIDTH }}>
            <Hero {...{ scrollY }} {...{ scrollToRef }} divRef={refs["home"]} />
            <Spacer height={"15vh"} />
            <Reviews />
            <Spacer height={"15vh"} />
            <Gallery divRef={refs["gallery"]} />
            <Spacer height={MARGIN} />
            <Details divRef={refs["detail"]} />
            <Spacer height={MARGIN} />
            <Location divRef={refs["location"]} />
            <Spacer height={MARGIN} />
            <Contact divRef={refs["contact"]} />
            <Spacer height={MARGIN} />
            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{ cursor: "pointer" }}
                onClick={() => setOpenImprint(true)}
              >
                Impressum
              </p>
              <Spacer width={MIN_MARGIN} />
              <p>|</p>
              <Spacer width={MIN_MARGIN} />
              <p>© {new Date().getFullYear()} Friedebold</p>
            </div>
            <Spacer height={MARGIN} />
          </div>
        </>
      ) : (
        <Imprint {...{ setOpenImprint }} />
      )}
    </>
  );
};

export default App;
