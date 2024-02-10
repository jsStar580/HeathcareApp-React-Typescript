import CookGallary from "./CookGallary";
import Chart from "@/components/common/Chart";
import Scroll from "@/components/common/Scroll";

import "./index.scss";

const Home = () => {
  return (
    <div className="home-page">
      <div className="flex w-full">
        <div className="relative home-top-left-image flex items-center justify-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/image/ring.svg" alt="ring" />
          </div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src="/image/time.svg" alt="time" />
          </div>
        </div>
        <div className="bg-[#2E2E2E] w-full h-[316px] flex justify-center py-6 px-10">
          <Chart />
        </div>
      </div>
      <CookGallary />
      <div className="upscroll">
        <Scroll />
      </div>
    </div>
  );
};

export default Home;
