import React from "react";
import "../css/AboutMe.css";

function AboutMe() {
  return (
    <section id="aboutMe">
      <img src="/images/BG.jpg" className="bg-img" alt="bg" />

      <div className="about-container">
        <div className="holder">
          <div className="about-img">
            <img src="/images/profile.jpeg" alt="profile" />
          </div>

          <div className="about-p">
            <p>
              Hello! This is <span>Deepak Kumar D.</span>
              <br />
              He is a <strong>FULL STACK DEVELOPER</strong> who is specialized
              in <strong>MERN</strong> Stack. He has done a Full Stack Course
              from GUVI Geek Network Pvt Ltd. with working demo projects.{" "}
              <small>
                (Don't Forget to check out the <a href="#projects">Projects</a>{" "}
                section)
              </small>
              <br />
              FrontEnd or BackEnd, the flexibility and the accessibility is the
              key area where he always tries to focus.
              <br />
              His punctuality, dedication and team-effort with a pinch of
              necessary leadership quality helps him in accomplishing the goals.
              <br />
              Maybe you also want to know that he has completed his degree in{" "}
              <strong>
                <i>Master of Computer Applications </i>
              </strong>
              with a CGPA of 7.45 in the year 2017.
            </p>
          </div>
        </div>
      </div>

      <h1>
        <hr />
        About Me
      </h1>
    </section>
  );
}

export default AboutMe;
