import upscroll from "../../assets/icon/up-scroll.svg";

import "./index.scss";

const Scroll = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <button onClick={() => toTop()} className="scroll">
        <img src={upscroll} />
      </button>
    </>
  );
};

export default Scroll;
