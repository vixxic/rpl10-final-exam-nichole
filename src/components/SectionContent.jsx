import "../styles/SectionContent.css";
import { FaLongArrowAltRight } from "react-icons/fa";

function SectionContent({
  titleb1,
  titleb2,
  // pharagraph1,
  // pharagraph2,
  // pharagraph3,
  // pharagraph4,
  description,
}) {
  return (
    <div className="section-content outfit-font">
      <h1>
        {titleb1}
        <br />
        {titleb2}
      </h1>
      <p className="des">
        {description.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>

      <p className="learn-more">
        <a>Learn more</a>
        <FaLongArrowAltRight />
      </p>
    </div>
  );
}

export default SectionContent;
