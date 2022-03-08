import React from "react";
import {
  FaGithub,
  FaCamera,
  FaCircleNotch,

  FaFileVideo,
  FaSearchDollar,
  FaAndroid,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    mainHeader: "SERVICES",
    subHeading: "My Services",
    text:
      "",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text:
        "A multi-webpage site developed using HTML,CSS,JavaScript and Bootstrap.",
    },
    {
      id: 2,
      icon: <FaCamera className="commonIcons" />,
      heading: "Photography",
      text:
        "Photography is the art,application and practis of creating durable images by recording light",
    },
    {
      id: 3,
      icon: <FaCircleNotch className="commonIcons" />,
      heading: "Web Desing",
      text:
        "Web design encontasses many different skills and disciplines in the production and maintaince of web designing .The different areas of web designing include web graphic design, user interface designing.",
    },
    {
      id: 4,
      icon: <FaAndroid className="commonIcons" />,
      heading: "App Devlopment",
      text:
        "Mobile App Development is the app or process by which a mobile app develop for mobile device such as personal degital assistants, enterpeise degital assistants or mobile phone.",
    },
    {
      id: 5,
      icon: <FaFileVideo className="commonIcons" />,
      heading: "Video Editing",
      text:
        "Video editing is the manupulation and arrangement of video shots.",
    },
    
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="services__box">
                  {info.icon}
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
