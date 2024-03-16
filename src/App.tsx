import { memberProjects } from "./projectData";
import { ProjectPanel } from "./components/ProjectPanel";

function App() {
  return (
    <div className="grid grid-cols-1 gap-4 max-w-4xl m-auto">
      {memberProjects.map((project) => (
        <ProjectPanel name={project.name} />
      ))}
    </div>
  );
}

export default App;
