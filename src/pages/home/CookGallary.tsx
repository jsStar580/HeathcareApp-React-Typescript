import Hex from "@/components/common/Hex";
import Photo from "@/components/common/Photo";
import Btn from "@/components/common/Btn";
import { useEffect, useState } from "react";
import { cookData } from "@/constants/define/cookGallary";
import { CookGallaies } from "@/constants/model/cookGallay";

const CookGallary = () => {
  const [filers, setFilters] = useState<cookData[]>([]);
  const [query, setQuery] = useState<string>("Morning");
  const [page, setPage] = useState<number>(1);

  const onFilter = (query: string, page: number) => {
    const tmp: cookData[] = [];
    for (let i = 0; i < CookGallaies.length; i++) {
      if (CookGallaies[i].when === query) tmp.push(CookGallaies[i]);
      if (tmp.length === 8 * page) {
        setFilters(tmp);
        break;
      }
    }
    setFilters(tmp);
    setPage(page);
    setQuery(query);
  };

  useEffect(() => {
    onFilter(query, page);
  }, []);

  return (
    <div className="mt-[21px]">
      <div className="flex gap-[64px] flex-wrap justify-center mb-[24px]">
        <Hex
          img={"/public/image/hex-1.svg"}
          onClick={() => onFilter("Morning", 1)}
          title={"Morning"}
        ></Hex>
        <Hex
          img={"/public/image/hex-1.svg"}
          onClick={() => onFilter("Lunch", 1)}
          title={"Lunch"}
        ></Hex>
        <Hex
          img={"/public/image/hex-1.svg"}
          onClick={() => onFilter("Dinner", 1)}
          title={"Dinner"}
        ></Hex>
        <Hex
          img={"/public/image/hex-2.svg"}
          onClick={() => onFilter("Snack", 1)}
          title={"Snack"}
        ></Hex>
      </div>
      <div className="flex gap-[8px] flex-wrap px-[160px]">
        {filers.map((item, index) => (
          <Photo
            key={index}
            title={item.date + "." + item.when}
            img={item.thumbnail}
          ></Photo>
        ))}
      </div>
      <div className="flex justify-center pt-[28px] pb-[64px]">
        <Btn
          title={"記録をもっと見る"}
          onClick={() => {
            onFilter(query, page + 1);
          }}
        ></Btn>
      </div>
    </div>
  );
};

export default CookGallary;
