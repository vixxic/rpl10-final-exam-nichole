import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Section2 from "./sections/Section2";
import Section345 from "./sections/Section345";
import Rating from "./sections/Rating";
import Footer from "./sections/Footer";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      smoothTouch: false,
    });

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <div className="app">
        <Navbar />
        <Home />
        <Section2 />
        <Section345
          layoutDirection="row"
          justifyContent=""
          img="./img-group1.png"
          titleb1="Chats for your"
          titleb2="distributed teams"
          sectiontext="section-3-text"
          description={[
            "Team combines the immediacy of real-time chat",
            "with an email threading model. With Team, you can",
            "catch up on important conversations while ignoring",
            "irrelevant ones.",
          ]}
          imgClass="section-3-img"
        />
        <Section345
          layoutDirection="row-reverse"
          justifyContent="flex-end"
          img="./img-group2.png"
          titleb1="Choose how you "
          titleb2="want to work"
          sectiontext="section-4-text"
          description={[
            "In Team, you’ve got all the flexibility to work when,",
            "where and how it’s best for you. You can easily chat,",
            "send audio and video clips, or hop on a huddle to",
            "talk things out live.",
          ]}
          imgClass="section-4-img"
        />
        <Section345
          layoutDirection="row"
          justifyContent=""
          img="./img-group3.png"
          titleb1="Move faster with "
          titleb2="your Team tools"
          sectiontext="section-5-text"
          description={[
            "With your other work apps connected to Team, you ",
            "can work faster by switching tabs less. And with",
            "powerful tools like Workflow Builder, you can",
            "automate away routine tasks.",
          ]}
          imgClass="section-5-img"
        />
        <Rating />
        <Footer />
      </div>
    </>
  );
}

export default App;
