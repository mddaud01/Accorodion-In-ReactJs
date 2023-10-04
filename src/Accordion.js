import React, { useState } from "react";
import "./Accordion.css";

const accordionData = [
  {
    sectionTitle: "What is Html 5 and explain brief",
    content:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website. ."
  },
  {
    sectionTitle: "What is JavaScript explain in brief ",
    content:
      "JavaScript is a programming language that is used to add interactive elements to web pages. "
  },
  {
    sectionTitle: "What is reactjs explain brief",
    content:
      "React JS is a JavaScript library that is used to build user interfaces.."
  }
];

function Accordion() {
  const [openSection, setOpenSection] = useState(-1);

  // this function is for toggling

  const toggleSection = (index) => {
    if (openSection === index) {
      // Clicking an open section closes it
      setOpenSection(-1);
    } else {
      // Clicking a closed section opens it
      setOpenSection(index);
    }
  };

  return (
    <div className="accordion-container">
      {accordionData.map((section, index) => (
        <div className="accordion-item" key={index}>
          <div
            className="accordion-header"
            onClick={() => toggleSection(index)}
          >
            {section.sectionTitle}
            <span className="accordion-icon">
              {openSection === index ? "-" : "+"}
            </span>
          </div>
          {/* here  is for block or none property apply  */}
          <div
            className={`accordion-content ${
              openSection === index ? "open" : ""
            }`}
          >
            {section.content}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
