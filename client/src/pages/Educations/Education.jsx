import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { MdSchool } from "react-icons/md";

const Education = () => {
  return (
    <section className="education" id="educationpage">
      <div className="edu-header">
        <h2>Education Details</h2>
        <div className="edu-underline"></div>
      </div>

      <VerticalTimeline>
        {/* Class 10 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#ffffff",
            color: "#333",
            boxShadow: "0 4px 15px rgba(34,0,75,0.4)",
          }}
          date="2018 - 2019"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Class 10</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Baal Baari Public School, Modinagar
          </h4>
        </VerticalTimelineElement>

        {/* Class 12 */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#ffffff",
            color: "#333",
            boxShadow: "0 4px 15px rgba(34,0,75,0.4)",
          }}
          date="2020 - 2021"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">Class 12</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Baal Baari Public School, Modinagar
          </h4>
        </VerticalTimelineElement>

        {/* B.Tech */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#ffffff",
            color: "#333",
            boxShadow: "0 4px 15px rgba(34,0,75,0.4)",
          }}
          date="2021 - 2025"
          iconStyle={{ background: "#138781", color: "#fff" }}
          icon={<MdSchool />}
        >
          <h3 className="vertical-timeline-element-title">B.Tech (CSE)</h3>
          <h4 className="vertical-timeline-element-subtitle">
            R.D Engineering College, Duhai
          </h4>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};

export default Education;
