import "./Sidebar.css";
import avatar from "../../static/demo_avatar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPlus,
  faEnvelope,
  faCalendarCheck,
  faCalendarWeek,
  faBars,
  faChevronDown,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProjectItem from "./projectItem/ProjectItem";
const dummyProjects = ["My Project", "MERN Stackers"];
const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const handleToggleSidebar = () => {
    console.log("inside handle toggle sidebar");
    setIsSidebarVisible((prev) => !prev);
  };
  return (
    <>
      {!isSidebarVisible ? (
        <div>
          <FontAwesomeIcon
            icon={faBars}
            onClick={handleToggleSidebar}
            style={{ marginTop: "10px", marginLeft: "10px" }}
          />
        </div>
      ) : (
        <div
          className={
            isSidebarVisible
              ? "parent__container"
              : "parent__container sidebar__hide"
          }
        >
          <div>
            <div className="account__info_sidebar__toggle">
              <div className="account__info__btn__container">
                <img
                  src={avatar}
                  alt=""
                  style={{
                    width: "25px",
                    borderRadius: "50%",
                    marginRight: "10px",
                  }}
                ></img>
                <h4 style={{ marginRight: "10px" }}>Debarshi</h4>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  style={{ width: "10px" }}
                />
              </div>
              <div>
                {/* <button onClick={handleToggleSidebar}>Toggle Sidebar</button> */}
                <FontAwesomeIcon icon={faXmark} onClick={handleToggleSidebar} />
              </div>
            </div>
            <div className="sidebar__middle__section">
              <div className="sidebar__middle__section__item">
                <span>
                  <FontAwesomeIcon icon={faPlus} />
                </span>
                Add Task
              </div>
              <div className="sidebar__middle__section__item">
                <span>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                Search
              </div>
              <div className="sidebar__middle__section__item">
                <span>
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Inbox
              </div>
              <div className="sidebar__middle__section__item">
                <span>
                  <FontAwesomeIcon icon={faCalendarCheck} />
                </span>
                Today
              </div>
              <div className="sidebar__middle__section__item">
                <span>
                  <FontAwesomeIcon icon={faCalendarWeek} />
                </span>
                Upcoming
              </div>
            </div>
            <div className="project__section__container">
              {dummyProjects.map((project, index) => {
                return (
                  <div key={index}>
                    <ProjectItem projectDetails={project} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
