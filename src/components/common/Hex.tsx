import "./index.scss";
interface HexProps {
  img: string;
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Hex = ({ title, img, onClick }: HexProps) => {
  return (
    <>
      <button onClick={onClick} className="hex">
        <img src={"/image/hex.svg"} className="bg-img" />
        <div className="content ">
          <img src={img} className="content-img" />
          <span className="content-title">{title}</span>
        </div>
      </button>
    </>
  );
};

export default Hex;
