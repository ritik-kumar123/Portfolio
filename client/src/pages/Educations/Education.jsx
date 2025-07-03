import React from 'react'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import './Education.css'
import { MdSchool } from 'react-icons/md';
const Education = () => {
  return (
    <>
      <div className="container education" id="educationpage">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          EDUCATION DETAILS
        </h2>
        <hr />
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(128, 128, 128, 0.101)",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2018 - 2019"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">CLASS 10</h3>
            <h4 className="vertical-timeline-element-subtitle">
              BAAL BAARI PUBLIC SCHOOL GOVINDPURI,MODINAGAR
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(128, 128, 128, 0.101)",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2020 - 2021"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">CLASS 12</h3>
            <h4 className="vertical-timeline-element-subtitle">
              BAAL BAARI PUBLIC SCHOOL GOVINDPURI,MODINAGAR
            </h4>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(128, 128, 128, 0.101)",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid  white" }}
            date="2021 - 2025"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<MdSchool />}
          >
            <h3 className="vertical-timeline-element-title">B.TECH(CSE)</h3>
            <h4 className="vertical-timeline-element-subtitle">
              R.D ENGINEERING COLLEGE,DUHAI
            </h4>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education