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
            Looking for my next opportunity!
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
}

export default Timeline;
