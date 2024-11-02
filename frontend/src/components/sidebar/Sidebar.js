import "./Sidebar.css";
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
const dummyProjects = ["My Project", "MERN Stackers"];
const Sidebar = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const handleToggleSidebar = () => {
    console.log("inside handle toggle sidebar");
    setIsSidebarVisible((prev) => !prev);
  };
  return (
    // <div className="parent__container">
    <>
      {!isSidebarVisible ? (
        <div>
          <button onClick={handleToggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </button>
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
              <div>
                <img src="../../../static/demo_avatar.jpg"></img>
                <button>Debarshi</button>
              </div>
              <div>
                {/* <button onClick={handleToggleSidebar}>Toggle Sidebar</button> */}
                <FontAwesomeIcon icon={faXmark} />
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
              {dummyProjects.map((projectName, index) => {
                return (
                  <div key={index} className="project__button__container">
                    {projectName}
                    <div>
                      <FontAwesomeIcon
                        icon={faPlus}
                        style={{ marginRight: "10px" }}
                        className="project__button__icon__container"
                      />
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="project__button__icon__container"
                      />
                    </div>
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
