import "./index.scss";
interface Btn_props {
  title: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
const Button = ({ title, onClick }: Btn_props) => {
  return (
    <>
      <button onClick={onClick} className="btn">
        <span>{title}</span>
      </button>
    </>
  );
};

export default Button;
