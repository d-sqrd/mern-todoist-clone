import "./Sidebar.css";
import avatar from "../../static/demo_avatar.jpg";
import workspaces from "../../static/workspaces";
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
import WorkspaceItem from "./workspaceItem/WorkspaceItem";
const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const [isAcctInfoBtnClicked, setIsAcctInfoBtnClicked] = useState(false);
  const handleToggleSidebar = () => {
    console.log("inside handle toggle sidebar");
    // setIsSidebarVisible((prev) => !prev);
    toggleSidebar();
  };
  const handleAccountInfoBtnClick = () => {
    setIsAcctInfoBtnClicked((prev) => !prev);
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
        <div className="sidebar__parent__container">
          <div className="sidebar__top__section">
            <div
              className="sidebar__account__info__btn__container"
              onClick={handleAccountInfoBtnClick}
            >
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
              <FontAwesomeIcon icon={faChevronDown} style={{ width: "10px" }} />
            </div>

            <div>
              <FontAwesomeIcon icon={faXmark} onClick={handleToggleSidebar} />
            </div>
          </div>
          <div style={{ position: "relative" }}>
            {isAcctInfoBtnClicked ? (
              <div className="sidebar__acct__info__dropdown">
                <div className="sidebar__btn__menu__dropdown__item">
                  <p style={{ fontWeight: 500 }}>My Account</p>
                </div>
                <div className="sidebar__btn__menu__dropdown__item">
                  <p style={{ fontWeight: 500 }}>Logout</p>
                </div>
              </div>
            ) : (
              <></>
            )}
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
          <div>
            {workspaces.map((workspace, index) => {
              return (
                <div key={index}>
                  <WorkspaceItem workspaceDetails={workspace} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Sidebar;
