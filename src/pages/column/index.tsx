import Bus from "@/components/column/Bus";
import ColumnThumbnailComponent from "@/components/common/ColumnThumbnailComponent";
import Button from "@/components/common/Btn";
import { busData, columnData } from "@/constants/model/common";
import Scroll from "@/components/common/Scroll";

const Column = () => {
  return (
    <div className="bus-page">
      <div className="bus-thumbnail">
        {busData.map((item, index) => (
          <div key={index} className="bus">
            <Bus title={item.title} description={item.description} />
          </div>
        ))}
      </div>
      <div className="column-thumbnail">
        {columnData.map((item, index) => (
          <div key={index} className="mb-[18px]">
            <ColumnThumbnailComponent
              address={item.address}
              description={item.description}
              date={item.date}
              img={item.img}
            />
          </div>
        ))}
      </div>
      <div className="btn-section">
        <Button title="コラムをもっと見る" />
      </div>
      <div className="upscroll">
        <Scroll />
      </div>
    </div>
  );
};

export default Column;
