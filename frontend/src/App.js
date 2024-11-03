import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidebar/Sidebar";
import Tasks from "./components/tasks/Tasks";

function App() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
  };
  return (
    <div>
      <Router>
        <div style={{ display: "flex" }}>
          <Sidebar
            isSidebarVisible={isSidebarVisible}
            toggleSidebar={toggleSidebar}
          />
          <Routes>
            <Route
              path="/tasks/"
              element={<Tasks isSidebarVisible={isSidebarVisible} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
