import PlanMe from "./Components/PlanMe";
import "./Styles/styles.css";
import { TasksProvider } from "./Components/TasksContext";

function App() {
  return (
    <TasksProvider>
      <div>
        <PlanMe />
      </div>
    </TasksProvider>
  );
}

export default App;
