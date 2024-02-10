import { NavLink } from "react-router-dom";
import MenuDropDown from "./MenuDropDown";
import NavItem from "./NavItem";
import alarm from "@/assets/icon/alarm.svg";
import "./index.scss";

const menuSoruce = [
  { to: "/record", label: "自分の記録" },
  { to: "#", label: "体重グラフ" },
  { to: "#", label: "目標" },
  { to: "/column", label: "選択中のコース" },
  { to: "#", label: "コラム一覧" },
  { to: "#", label: "設定" },
];

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <NavLink to={"/"} className="header-logo">
            <img src={"/icon/logo.svg"} />
          </NavLink>
          <div className="menu-content">
            <div className="hidden lg:flex">
              <NavItem
                icon={"/icon/memo.svg"}
                lable={"自分の記録"}
                to={"/record"}
              />
              <NavItem
                icon={"/icon/challenge.svg"}
                lable={"チャレンジ"}
                to={"#"}
              />
              <NavItem
                icon={"/icon/notification.svg"}
                lable={"お知らせ"}
                to={"#"}
              />
              <div className="alarm">
                <img src={alarm} alt="alarm" />
              </div>
            </div>
            <MenuDropDown menuSoruce={menuSoruce} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
