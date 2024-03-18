import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { IoMdSchool, IoMdBriefcase } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

export const Timeline = () => {
  return (
    <section className="my-20 flex flex-col items-center justify-around">
      <h1 id="story" className="vertical-timeline-element-title text-6xl font-bold">
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
          <h4 className="vertical-timeline-element-subtitle">Edmonton, Alberta</h4>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2016 - 2017"
          contentStyle={{ background: "#3e363f", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid #3e363f" }}
          iconStyle={{ background: "#3e363f", color: "#fff" }}
          icon={<IoMdBriefcase />}
        >
          <img className="h-16 w-32" src="https://www.camrose.ca/en/images/structure/logo.svg" />
          <h3 className="vertical-timeline-element-title text-lg font-bold">
            Municipal Engineering Co-op Student
          </h3>
          <h4 className="vertical-timeline-element-subtitle">City of Camrose</h4>
          <h4 className="vertical-timeline-element-subtitle">Camrose, Alberta</h4>
          <br />
          <ul>
            <li>
              • lead on annual Unidirectional Flushing program for Camrose acting as project lead
            </li>
            <br />
            <li>• modified existing flushing paths and created new networks for developing</li>
            <br />
            <li>
              • updated and identified data for 16 rail crossings in Camrose as required by
              Transport Canada
            </li>
            <br />
            <li>• contributed to preparing the Camrose airport traffic study</li>
            <br />
            <li>
              • determined sightlines and the necessity of safety devices at problematic traffic
              intersections
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
          <h3 className="vertical-timeline-element-title text-lg font-bold">FME Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Transport Canada</h4>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, Alberta</h4>
          <br />
          <ul>
            <li>• Developed multiple GIS layers using Feature Manipulation Engine (FME)</li>
            <br />
            <li>
              • Managed and updated the framework of the existing backend database using Microsoft
              Access
            </li>
            <br />
            <li>• Created new form input to standardize incoming data to the backend database</li>
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
          <h4 className="vertical-timeline-element-subtitle">City of Edmonton</h4>
          <h4 className="vertical-timeline-element-subtitle">Edmonton, Alberta</h4>
          <br />
          <ul>
            <li>
              • Developed the analytics and metrics for different data points for the "Anti-icing
              Pilot Environment Report"
            </li>
            <br />
            <li>
              • Co-author of the “Anti-icing Pilot Environmental Report 2017-2018” which has been
              presented to the City Council
            </li>
            <br />
            <li>
              • Maintained professional relationship with EPCOR drainage services through excellent
              and concise communication
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
          <h4 className="vertical-timeline-element-subtitle">Edmonton, Alberta</h4>
          <br />
          <ul>
            <li>
              • Collaborated and communicated with project coordinators/managers and facilitators to
              provide quality drawings
            </li>
            <br />
            <li>
              • Designed, created, and recommended new drawings and standardized them for multi-site
              application;
            </li>
            <br />
            <li>
              • Created CAD drawings from concept to final design, drawn to scale, and suitably
              detailed to convey the necessary information required for approval;
            </li>
            <br />
            <li>
              • Designed 30+ Telus subdivision fibre designs with high proficiency with AutoCAD
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
            <h4 className="vertical-timeline-element-subtitle">Edmonton, Alberta</h4>
          </h3>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </section>
  );
};
