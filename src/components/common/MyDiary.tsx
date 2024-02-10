import { dataProps } from "@/constants/define/common";

import "./index.scss";

export default ({ date, title, description }: dataProps) => {
  return (
    <div className="diary">
      <div className="date">
        <span>{date?.year}</span>
        {date?.time}
      </div>
      <div className="title">{title}</div>
      <div className="description">{description}</div>
    </div>
  );
};
