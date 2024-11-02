import "./ProjectItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PlusButtonDropDown from "./plusButtonDropdown/PlusButtonDropDown";

const subProjectItems = ["Sub Project Item 1", "Sub Project Item 2"];

const ProjectItem = ({ projectDetails }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isPlusBtnMenuOpen, setIsPlusBtnMenuOpen] = useState(false);
  const handleArrowClick = () => {
    // console.log(`inside handleArrowClick = ${isCollapsed}`);
    setIsCollapsed((prevIsCollapsed) => !prevIsCollapsed);
  };
  const handlePlusIconClick = () => {
    setIsPlusBtnMenuOpen((prev) => !prev);
  };
  return (
    <div style={{ margin: "20px 0px" }}>
      <div className="project__item__header__container">
        <p style={{ fontWeight: 500 }}>{projectDetails}</p>
        <div style={{ position: "relative" }} className="grandpa">
          <FontAwesomeIcon
            icon={faPlus}
            style={{ marginRight: "10px" }}
            className="project__item__button__icons"
            onClick={handlePlusIconClick}
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
          <PlusButtonDropDown isOpen={isPlusBtnMenuOpen} />
        </div>
      </div>
      {subProjectItems.map((subProjectItem, index) => {
        return (
          <div
            key={index}
            className={
              isCollapsed
                ? "project__item__subproject__container"
                : "project__item__subproject__container__close"
            }
          >
            <div>{subProjectItem}</div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectItem;
