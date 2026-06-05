import "../styles/Section345.css";
import SectionContent from "../components/SectionContent";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

function Section345({
  layoutDirection,
  justifyContent,
  img,
  titleb1,
  titleb2,
  description,
  sectiontext,
  imgClass,
}) {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.${sectiontext}`,
          start: "top 70%",
        },
      })
      .from(`.${sectiontext}`, {
        x: sectiontext === "section-4-text" ? -100 : 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
      .from(
        `.${imgClass}`,
        {
          x: sectiontext === "section-4-text" ? 100 : -100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        },
        "<",
      );
  }, []);

  return (
    <div
      className="section"
      style={{
        flexDirection: layoutDirection,
      }}
    >
      <div
        className="section345-img-con"
        style={{ justifyContent: justifyContent }}
      >
        <img className={imgClass} src={img} />
      </div>

      <div className={sectiontext}>
        <SectionContent
          titleb1={titleb1}
          titleb2={titleb2}
          description={description}
        />
      </div>
    </div>
  );
}

export default Section345;
