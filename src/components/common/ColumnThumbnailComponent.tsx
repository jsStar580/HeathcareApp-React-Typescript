import "./index.scss";
import { dataProps } from "@/constants/define/common";

const ColumnThumbnailComponent = ({
  address,
  description,
  date,
  img,
}: dataProps) => {
  return (
    <>
      <div className="column">
        <div className="img-content" style={{ backgroundImage: `url(${img})` }}>
          <p className="date">
            <span>{date?.year}</span>
            {date?.time}
          </p>
        </div>
        <div className="title-content">
          <p className="description">{description}</p>
          <p className="address">{address}</p>
        </div>
      </div>
    </>
  );
};

export default ColumnThumbnailComponent;
