import './App.css';
import Environment from './classes/Environment';
import { Project } from './classes/Project';
import ProjectComponent from './components/Project/ProjectComponent';
import acertaLogo from './assets/acerta.png';

function App() {
  const projects: Project[] = [
    new Project('Connect', [
      new Environment('DEV', ['v04l9431']),
      new Environment('TST', ['v03l0036', 'v03l0037', 'v03l0038']),
      new Environment('ACC', ['v02l0036', 'v02l0037', 'v02l0038']),
    ]),
    new Project('CKB', [
      new Environment('TST', ['v03l0039']),
      new Environment('ACC', ['v02l0039']),
    ]),
  ];

  return (
    <>
      <img src={acertaLogo} />
      {projects.map((project) => {
        return <ProjectComponent project={project} />;
      })}
    </>
  );
}

export default App;
