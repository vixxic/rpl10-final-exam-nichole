import "../styles/Home.css";
import { FaArrowRight } from "react-icons/fa6";
import gsap from "gsap";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    gsap
      .timeline()
      .to({}, {})
      .from(".home-p", { opacity: 0, duration: 1, ease: "power2.out" })
      .from(".home-tlt", { opacity: 0, duration: 0.8, ease: "power2.out" });
  }, []);
  return (
    <div className="home-section outfit-font">
      <div className="home-content-con">
        <h1 className="home-tlt ">
          Instant collaboration <br /> for remote teams
        </h1>
        <p className="home-p">
          All-in-one place for your remote team to
          <br /> chat, collaborate and track project progress.
        </p>

        <div className="email-inpt-home">
          <div className="email-inpt-con">
            <input placeholder="Email" />
            <FaArrowRight color="#7676B2" size={25} />
          </div>

          <button className="get-early-btn">Get Early Access</button>
        </div>
      </div>
    </div>
  );
}

export default Home;
