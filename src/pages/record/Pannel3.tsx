import "./pannel3.scss";
const ListItem = ({
  time,
  title,
  cal,
}: {
  time: number;
  title: string;
  cal: string;
}) => {
  return (
    <div className="w-[48%] border-b-gray-400 flex border-b h-[48px]">
      <div className="w-[13px] pt-3">
        <div className="w-[4px] h-[4px] rounded-full bg-light"></div>
      </div>
      <div className="w-full">
        <div className="flex justify-between">
          <span className="text-light text-[15px]">{title}</span>
          <span className="text-primary-300 text-[15px]">{time} min</span>
        </div>
        <div>
          <span className="text-primary-300 text-[15px]">{cal}</span>
        </div>
      </div>
    </div>
  );
};

//家事全般（立位・軽い）

const Pannel3 = () => {
  const ListElems = [];
  for (let i = 0; i < 50; i++)
    ListElems.push(
      <ListItem title={"家事全般（立位・軽い）"} time={10} cal="26kcal" />
    );
  return (
    <div className="w-full bg-dark-500 mt-[56px] h-[264px] flex flex-col ">
      <div className="pt-[16px] flex text-light pl-[24px]">
        <div className="w-[96px] break-words text-[15px]">BODY RECORD</div>
        <div className="text-[25px]">2021.05.21</div>
      </div>
      <div className="h-full overflow-auto list-scroll pr-4 pb-[16px]">
        <div className="h-full overflow-auto list-scroll flex flex-wrap justify-between px-[24px]">
          {ListElems}
        </div>
      </div>
    </div>
  );
};

export default Pannel3;
