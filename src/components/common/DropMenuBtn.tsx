import "./index.scss";
type Btn_props = {
  title: string;
};
const DropMenuBtn = ({ title }: Btn_props) => {
  return (
    <>
      <button className="dropMenuBtn">
        <span>{title}</span>
      </button>
    </>
  );
};

export default DropMenuBtn;
