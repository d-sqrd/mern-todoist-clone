import "./ProjectItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const ProjectItem = ({ projectDetails }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleArrowClick = () => {
    // console.log(`inside handleArrowClick = ${isCollapsed}`);
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };
  return (
    <div className="button__container">
      {projectDetails}
      <div>
        <FontAwesomeIcon
          icon={faPlus}
          style={{ marginRight: "10px" }}
          className="button__icons"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          className={
            isCollapsed
              ? "button__icons arrow__clockwise__animate"
              : "button__icons arrow__anti-clockwise__animate"
          }
          onClick={handleArrowClick}
        />
      </div>
    </div>
  );
};

export default ProjectItem;
