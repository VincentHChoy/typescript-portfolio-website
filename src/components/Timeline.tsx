import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool, IoMdBriefcase } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

const Timeline = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-around">
      <h1
        id="story"
        className="vertical-timeline-element-title text-6xl font-bold"
      >
        My Story
      </h1>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          date="2014"
          icon={<IoMdSchool />}
        >
          <section className="flex flex-row">
            <img className="-mx-8 h-28 invert" src="uofa.png" />
            <img className="h-28 invert" src="engg.png" />
          </section>
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Civil Engineering at University of Alberta
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Edmonton, Alberta
          </h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          icon={<IoMdBriefcase />}
        >
          <img
            className="h-16 w-32"
            src="https://www.camrose.ca/en/images/structure/logo.svg"
          />
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Municipal Engineering Co-op Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            City of Camrose
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Camrose, Alberta
          </h4>
          <br />
          <ul>
            <li>
              • lead on annual Unidirectional Flushing program for Camrose
              acting as project lead
            </li>
            <br />
            <li>
              • modified existing flushing paths and created new networks for
              developing
            </li>
            <br />
            <li>
              • updated and identified data for 16 rail crossings in Camrose as
              required by Transport Canada
            </li>
            <br />
            <li>
              • contributed to preparing the Camrose airport traffic study
            </li>
            <br />
            <li>
              • determined sightlines and the necessity of safety devices at
              problematic traffic intersections
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2017 - 2018"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          icon={<IoMdBriefcase />}
        >
          <img
            className="h-20 w-48"
            src="https://upload.wikimedia.org/wikipedia/commons/5/56/Transports_Canada.svg"
          />
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            FME Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Transport Canada
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Edmonton, Alberta
          </h4>
          <br />
          <ul>
            <li>
              • Developed multiple GIS layers using Feature Manipulation Engine
              (FME)
            </li>
            <br />
            <li>
              • Managed and updated the framework of the existing backend
              database using Microsoft Access
            </li>
            <br />
            <li>
              • Created new form input to standardize incoming data to the
              backend database
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          icon={<IoMdBriefcase />}
        >
          <img
            className="my-2 w-48 invert"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/City_of_Edmonton_Logo.svg/1280px-City_of_Edmonton_Logo.svg.png"
          />
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Environmental Engineering Co-op Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            City of Edmonton
          </h4>
          <h4 className="vertical-timeline-element-subtitle">
            Edmonton, Alberta
          </h4>
          <br />
          <ul>
            <li>
              • Developed the analytics and metrics for different data points
              for the "Anti-icing Pilot Environment Report"
            </li>
            <br />
            <li>
              • Co-author of the “Anti-icing Pilot Environmental Report
              2017-2018” which has been presented to the City Council
            </li>
            <br />
            <li>
              • Maintained professional relationship with EPCOR drainage
              services through excellent and concise communication
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          icon={<IoMdSchool />}
        >
          <section className="flex flex-row">
            <img className="-mx-8 h-28 invert" src="uofa.png" />
            <img className="h-28 invert" src="engg.png" />
          </section>
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Graduated from Civil Engineering at the University of Alberta
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2021 - 2022"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          icon={<IoMdBriefcase />}
        >
          <img
            className="my-2 w-48 rounded-md"
            src="https://promark-leeroy.s3.us-east-2.amazonaws.com/2021/09/Logo-Promark-telecon-1-1.jpg"
          />
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Fibre Network Design EIT
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Telecon</h4>
          <h4 className="vertical-timeline-element-subtitle">
            Edmonton, Alberta
          </h4>
          <br />
          <ul>
            <li>
              • Collaborated and communicated with project coordinators/managers
              and facilitators to provide quality drawings
            </li>
            <br />
            <li>
              • Designed, created, and recommended new drawings and standardized
              them for multi-site application;
            </li>
            <br />
            <li>
              • Created CAD drawings from concept to final design, drawn to
              scale, and suitably detailed to convey the necessary information
              required for approval;
            </li>
            <br />
            <li>
              • Designed 30+ Telus subdivision fibre designs with high
              proficiency with AutoCAD
            </li>
            <br />
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          date="2022"
          icon={<IoMdSchool />}
        >
          <img
            className="my-2 h-16 invert"
            src="https://www.lighthouselabs.ca/assets/lighthouselabs-logo-d5df6d383f7466b06a64de9561fd537493502eafe78bbf3bcd3de82884e5dd85.png"
          />
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Full-stack Web Development Bootcamp at Lighthouse Labs
          </h3>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="present"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          icon={<AiFillStar />}
        >
          <h3 className="vertical-timeline-element-title">
          <img
            className="my-2 w-48 rounded-md"
            src="data:image/png;base64,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"
          />
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Full-stack Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">First Canadian Financial Group</h4>
          <h4 className="vertical-timeline-element-subtitle">
            Edmonton, Alberta
          </h4>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
