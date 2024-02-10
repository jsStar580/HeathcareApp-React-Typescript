import { dataProps } from "@/constants/define/common";

import "./index.scss";

const ComponentRecord = ({ title, description, img }: dataProps) => {
  return (
    <>
      <div className="record">
        <div className="bgImg">
          <img src={img} alt="img" />
        </div>
        <div className="black">
          <div className="title-content">
            <p className="title">{title}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComponentRecord;
