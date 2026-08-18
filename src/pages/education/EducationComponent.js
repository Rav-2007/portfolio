import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import Educations from "../../containers/education/Educations";
import Certifications from "../../containers/certifications/Certifications";
import { degrees } from "../../portfolio";
import CompetitiveSites from "../../components/competitiveSites/CompetitiveSites";
import EducationImg from "./EducationImg";
import { competitiveSites } from "../../portfolio";
import { certifications } from "../../portfolio";
import "./EducationComponent.css";
import { Fade } from "react-reveal";

class Education extends Component {
  render() {
    const theme = this.props.theme;

    // Debug logs removed
    return (
      <div
        className="education-main"
        style={{ backgroundColor: theme && theme.body ? theme.body : "transparent" }}
      >
        
        <Header theme={this.props.theme} />
        <div className="basic-education">
          <Fade bottom duration={2000} distance="40px">
            <div className="heading-div">
              <div className="heading-img-div">
                {/* <img
									src={require("../../assets/images/education.svg")}
									alt=""
								/> */}
                <EducationImg theme={theme} />
              </div>
              <div className="heading-text-div">
                <h1 className="heading-text" style={{ color: theme.text }}>
                  Education
                </h1>
                <h3 className="heading-sub-text" style={{ color: theme.text }}>
                  Basic Qualification and Certifcations
                </h3>
                <CompetitiveSites logos={competitiveSites.competitiveSites} />
              </div>
            </div>
          </Fade>
          {
            (() => {
              try {
                return <Educations theme={this.props.theme} />;
              } catch (e) {
                console.error("Educations render error:", e);
                return (
                  <div style={{ padding: 20 }}>
                    <h2 style={{ color: theme.text }}>Education (fallback)</h2>
                    {degrees && degrees.degrees
                      ? degrees.degrees.map((d, i) => (
                          <div key={i} style={{ marginBottom: 12 }}>
                            <h3 style={{ color: theme.text }}>{d.title}</h3>
                            <p style={{ color: theme.text }}>{d.subtitle}</p>
                            <p style={{ color: theme.text }}>{d.duration}</p>
                          </div>
                        ))
                      : null}
                  </div>
                );
              }
            })()
          }
          {certifications && certifications.certifications && certifications.certifications.length > 0 ? (
            <Certifications theme={this.props.theme} />
          ) : null}
        </div>
        <Footer theme={this.props.theme} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Education;
