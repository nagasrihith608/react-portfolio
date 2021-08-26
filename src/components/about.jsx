import React from "react";
import myImage from "../img/myImage.png";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [
        { id: "C/C++", content: "C/C++", porcentage: "80%", value: "80" },
        { id: "python", content: "Python", porcentage: "75%", value: "75" },
        {
          id: "Java",
          content: "Java",
          porcentage: "75%",
          value: "75"
        },
        { id: "Go", content: "Go", porcentage: "60%", value: "60" },
        {
          id: "OOPS",
          content: "OOPS",
          porcentage: "70%",
          value: "70"
        }
      ],
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am Naga Srihith Penjarla a 3rd-year student at the International Institute of Information Technology Bangalore pursuing computer science in a 5-year Integrated master's program. I have always been a tech enthusiast. Currently, my interest peak in cybersecurity and I'm looking to make my career out of it. In my second year summer, I have worked as a research intern in the field of cryptography."
        },
        {
          id: "second-p-about",
          content:
            "I enjoy playing cricket, badminton and others games. You can ask me anything about anime, movies, and web series. I like to listen to music and am picky about the books I read. You can find my resume below."
        },
        {
          id: "third-p-about",
          content:
          <center><a className="btn btn-primary button-big btn js-scroll px-4" href={"https://drive.google.com/drive/folders/1hOHPYWjsjgjvwI-rgieXBepgKJ3tZO33?usp=sharing"} target="_blank" rel="noopener noreferrer" role="button">MyResume</a></center>
        } 
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="skill-mf">
                      {/* <p className="title-s">Skill</p> */}
                      {this.state.skills.map(skill => {
                        return (
                          <React.Fragment key={skill.id}>
                            <span>{skill.content}</span>{" "}
                            <span className="pull-right">
                              {skill.porcentage}
                            </span>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: skill.porcentage }}
                                aria-valuenow={skill.value}
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </React.Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
