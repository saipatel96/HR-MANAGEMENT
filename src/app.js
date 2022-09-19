
import "./App.css";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div>
      <section>
        <div className="bar-container">
          <Sidebar />
          <div>
            <Navbar />
            <Tasks />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
