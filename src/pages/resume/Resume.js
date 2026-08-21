import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./Resume.css";
import myResumePdf from "../../assets/docs/Ravi_Kiran_Resume.pdf";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";

export default class ResumePage extends Component {
  render() {
    const theme = this.props.theme;
    
    return (
      <div className="resume-main">
        <Header theme={theme} />
        <div className="resume-view" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '40px 0' }}>
          <Fade bottom duration={2000} distance="40px">
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
              <Button
                text="📃 Download Resume"
                newTab={true}
                href={myResumePdf}
                theme={theme}
              />
            </div>
            <div style={{ width: '90%', maxWidth: '1000px', height: '80vh', boxShadow: '0px 0px 20px rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden' }}>
              <iframe
                src={myResumePdf}
                width="100%"
                height="100%"
                title="Ravi Kiran Resume"
                style={{ border: 'none' }}
              />
            </div>
          </Fade>
        </div>
        <Footer theme={theme} onToggle={this.props.onToggle} />
        <TopButton theme={theme} />
      </div>
    );
  }
}