import "./WorkspaceItem.css";
import projects from "../../../static/projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import PlusButtonDropDown from "./plusButtonDropdown/PlusButtonDropDown";

const WorkspaceItem = ({ workspaceDetails }) => {
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
      <div className="workspace__item__header__container">
        <p style={{ fontWeight: 500 }}>{workspaceDetails.name}</p>
        <div style={{ position: "relative" }}>
          <FontAwesomeIcon
            icon={faPlus}
            style={{ marginRight: "10px" }}
            className="workspace__item__button__icons"
            onClick={handlePlusIconClick}
          />
          <FontAwesomeIcon
            icon={faAngleRight}
            className={
              isCollapsed
                ? "workspace__item__button__icons workspace__item__arrow__clockwise__animate"
                : "workspace__item__button__icons workspace__item__arrow__anti-clockwise__animate"
            }
            onClick={handleArrowClick}
          />
          <PlusButtonDropDown isOpen={isPlusBtnMenuOpen} />
        </div>
      </div>
      {projects.map((projectItem, index) => {
        return (
          <div
            key={index}
            className={
              isCollapsed
                ? "workspace__item__subproject__container"
                : "workspace__item__subproject__container__close"
            }
          >
            <div>{projectItem.name}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WorkspaceItem;
