const PlusButtonDropDown = ({ isOpen }) => {
  if (!isOpen) return null;
  return (
    <div>
      <div className="sidebar__acct__info__dropdown" style={{ top: "30px" }}>
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
