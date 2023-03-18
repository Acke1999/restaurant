import { SubHeading } from "../../components";
import { images, data } from "../../constants";
import "./Laurels.css";

const Laurels = () => {
  const Award = ({ award: { imgUrl, title, subtitle } }) => (
    <div className="app-award-card">
      <img src={imgUrl} alt="award" />
      <div className="app-award-card-info">
        <p className="p-cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p-opensans">{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="app-bg app-wrapper section-padding" id="awards">
      <div className="app-wrapper-info">
        <SubHeading title="Awards &amp; Recognition" />
        <h1 className="headtext-cormorant">Our Laurels</h1>
        <div className="app-laurels-awards">
          {data.awards.map((award) => (
            <Award award={award} key={award.title} />
          ))}
        </div>
      </div>

      <div className="app-wrapper-img">
        <img src={images.laurels} alt="laurels" />
      </div>
    </div>
  );
};

export default Laurels;
