const PlusButtonDropDown = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="project__item__plus__btn__menu__container">
        <div className="sidebar__btn__menu__dropdown__item">
          <p style={{ fontWeight: 500 }}>Add Project</p>
          <span>Plan and assign tasks</span>
        </div>
        <div className="sidebar__btn__menu__dropdown__item">
          <p style={{ fontWeight: 500 }}>Add Project</p>
          <span>Plan and assign tasks</span>
        </div>
      </div>
    </div>
  );
};

export default PlusButtonDropDown;
