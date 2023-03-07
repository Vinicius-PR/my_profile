import React, { useState } from "react";
import { ScrollContainer } from "./styles";
import { AiOutlineArrowUp } from "react-icons/ai";

const Scroll = () => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <ScrollContainer
      className={`${scroll ? "active" : ""}`}
      onClick={scrollToTop}
    >
      <AiOutlineArrowUp size={35} />
    </ScrollContainer>
  );
};

export default Scroll;
