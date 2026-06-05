import "../styles/Section2.css";
import SectionContent from "../components/SectionContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Section2() {
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".section-2-text",
        start: "top 70%",
      },
    });

    tl.from(".section-2-text", {
      x: -100,
      opacity: 0,
      duration: 1,
    })
      .from(".task-today-img", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .from(".web-dash-img", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .from(".mentors-img", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      })
      .from(".send-img", {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "back.out(1.7)",
      });
  }, []);
  return (
    <div className="section section-2">
      <div className="section-2-text">
        <SectionContent
          titleb1="Chats for your"
          titleb2="distributed teams"
          description={[
            "Team combines the immediacy of real-time chat",
            "with an email threading model. With Team, you can",
            "catch up on important conversations while ignoring",
            "irrelevant ones.",
          ]}
        />
      </div>
      <div className="section2-img-con">
        <img
          className="sec-2-img task-today-img"
          src="/section2-img/taskToday.png"
        ></img>
        <img
          className="sec-2-img web-dash-img"
          src="/section2-img/webDashboard.png"
        ></img>
        <img
          className="sec-2-img mentors-img"
          src="/section2-img/mentors.png"
        ></img>
        <img className="sec-2-img send-img" src="/section2-img/send.png"></img>
      </div>
    </div>
  );
}

export default Section2;
