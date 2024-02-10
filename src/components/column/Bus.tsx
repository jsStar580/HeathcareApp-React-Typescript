import { dataProps } from "@/constants/define/common";
import centerLine from "../../assets/icon/centerLine.svg";
import busImg from "../../assets/icon/bus.svg";

import "./index.scss";

const Bus = ({ title, description }: dataProps) => {
  return (
    <div className="bus">
      <img src={busImg} alt="busImg" />
      <div className="txt">
        <div className="titleDiv">
          <p className="title">{title}</p>
        </div>
        <div className="centerLine">
          <img src={centerLine} alt="centerLine" />
        </div>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default Bus;
