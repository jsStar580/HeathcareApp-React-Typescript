import ComponentRecord from "@/components/common/ComponentRecord";
import MyDiary from "@/components/common/MyDiary";
import Button from "@/components/common/Btn";
import Pannel2 from "./Pannel2";
import Pannel3 from "./Pannel3";

import { commonRecords, dailyData } from "@/constants/model/common";
import Scroll from "@/components/common/Scroll";

const Record = () => {
  return (
    <div className="record-page">
      <div className="record-section">
        {commonRecords.map((item, index) => (
          <div key={index}>
            <ComponentRecord
              img={item.img}
              title={item.title}
              description={item.description}
            />
          </div>
        ))}
      </div>
      <Pannel2 />
      <Pannel3 />
      <div className="diary-section">
        <div className="title">MY DIARY</div>
        <div className="diary-column">
          {dailyData.map((item, index) => (
            <div key={index}>
              <MyDiary
                date={item.date}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>
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

export default Record;
