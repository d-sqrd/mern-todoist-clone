import "./ProjectItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const subProjectItems = ["Sub Project Item 1", "Sub Project Item 2"];

const ProjectItem = ({ projectDetails }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleArrowClick = () => {
    // console.log(`inside handleArrowClick = ${isCollapsed}`);
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };
  return (
    <div className="project__item__button__container">
      {projectDetails}
      <div>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ marginRight: "10px" }}
          className="project__item__button__icons"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className={
            isCollapsed
              ? "project__item__button__icons project__item__arrow__clockwise__animate"
              : "project__item__button__icons project__item__arrow__anti-clockwise__animate"
          }
          onClick={handleArrowClick}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
