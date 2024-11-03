// this common component will show all the tasks for the given Workspace, Project and Section combination
// this component will be called from the sidebar buttons
import "./Tasks.css";
import projects from "../../static/projects";
import tasks from "../../static/tasks";
import fetchTasks from "../../utils/fetchTasks";
const Tasks = ({
  unorganizedTasks,
  userId,
  workspaceName,
  projectName,
  sectionNames,
  isSidebarVisible,
}) => {
  //   const taskList = fetchTasks(
  //     unorganizedTasks,
  //     userId,
  //     workspaceName,
  //     projectName,
  //     sectionNames
  //   );
  console.log(`Tasks component...isSideBarVisible = ${isSidebarVisible}`);
  return (
    <div
      className={
        isSidebarVisible
          ? "tasks__parent__container"
          : "tasks__parent__container tasks__parent__container__margin__left__animate"
      }
    >
      <h1>Component that will list individual tasks</h1>
      {/* <h1>{projectName}</h1>;
      {sectionNames.map((section, sectionIndex) => {
        return (
          <div index={sectionIndex}>
            <h1>{section}</h1>
            {taskList.map((task, taskIndex) => {
              return task?.section === section ? (
                <div index={taskIndex}>
                  <h3>Individual Task details</h3>
                </div>
              ) : (
                <></>
              );
            })}
          </div>
        );
      })} */}
    </div>
  );
};
export default Tasks;
