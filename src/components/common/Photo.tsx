import "./index.scss";
type PhotoProps = {
  img: string;
  title: string;
};
const Photo = ({ title, img }: PhotoProps) => {
  return (
    <>
      <div className="photo" style={{ backgroundImage: `url(${img})` }}>
        <div className="title-content">
          <span className="title">{title}</span>
        </div>
      </div>
    </>
  );
};

export default Photo;
