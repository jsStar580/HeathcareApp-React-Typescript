import Chart from "@/components/common/Chart";

const Pannel2 = () => {
  return (
    <div className="pannel2">
      <div className="pt-[16px] flex text-light pl-[24px]">
        <div className="w-[96px] break-words text-[15px]">BODY RECORD</div>
        <div className="text-[25px]">2021.05.21</div>
      </div>
      <div className="h-full px-10">
        <Chart />
      </div>
      <div className="flex pl-[32px] pb-[16px]">
        <button className="bg-light rounded-[32px]  text-primary-300 w-[56px] h-[24px]">
          日
        </button>
        <button className="bg-light rounded-[32px]  text-primary-300 w-[56px] h-[24px] ml-[16px]">
          週
        </button>
        <button className="bg-light rounded-[32px]  text-primary-300 w-[56px] h-[24px] ml-[16px]">
          月
        </button>
        <button className="bg-primary-300 rounded-[32px]  text-light w-[56px] h-[24px] ml-[16px]">
          年
        </button>
      </div>
    </div>
  );
};

export default Pannel2;
