import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    text:
      "I'm Sonalika Sapanpriya Dehury.",
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "Sonalika Sapanaprya Dehuri" },
    { id: 2, title: "Email:", text: "sonalikadehuri@gmail.com" },
    { id: 3, title: "Phone:", text: "+91 65*******8" },
    { id: 4, title: "Linkedin", text: "Sonalika_123" },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/sonalika.png" alt="sonalika" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There</h1>
              <div className="about__info-p1">
                
                Hi There
                My name is Sonalika Sapanpriya Dehury,I'm from Angul.I'm 19 years old.I have complited my schooling from Saraswati Sishu Vidya Mandir,Angul in year 2017
                then I'm complited my 12th from Jupiter Women's Higher Secondary School,BBSR.Now I'm continuing my Btech degree in Centurion University,BBSR.
              </div>
              <div className="about__info-p2">
                I am outgoing,dedicated and open-minded.I get across to people and adjust to changes with ease.
                I believe that a person should work on developing their skills and learning new things all the time.
                I'm proud of myself.
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info) => (
                    <div className="col-6">
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
