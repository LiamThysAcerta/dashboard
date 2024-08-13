import './App.css';
import Environment from '@/classes/Environment';
import { Project } from '@/classes/Project';
import ProjectComponent from '@/components/Project/ProjectComponent';
import acertaLogo from '@/assets/acerta.png';
import AgreementsComponent from './components/Server/AgreementsComponent';
import Container from './classes/Container';

function App() {
  const projects: Project[] = [
    new Project('Containers', [
      new Environment('Frontend', [
        new Container(
          'dev',
          'https://connect-frontend.dev.k8s.acerta.io/AES/actuator/health'
        ),
        new Container(
          'tst',
          'https://connect-frontend.tst.k8s.acerta.io/AES/actuator/health'
        ),
        new Container(
          'acc',
          'https://connect-frontend.acc.k8s.acerta.io/AES/actuator/health'
        ),
      ]),
      new Environment('Backend', [
        new Container(
          'dev',
          'https://dicco-rest-app.acc.k8s.acerta.io/dicco-rest/actuator/health'
        ),
        new Container(
          'tst',
          'https://dicco-rest-app.tst.k8s.acerta.io/dicco-rest/actuator/health'
        ),
        new Container(
          'acc',
          'https://dicco-rest-app.acc.k8s.acerta.io/dicco-rest/actuator/health'
        ),
      ]),
    ]),
    new Project('Virtual machines', [
      new Environment('DEV', [
        new Container(
          'dev',
          'http://v04l9431.global.dns:8080/AES/actuator/health'
        ),
      ]),
      new Environment('TST', [
        new Container(
          'tst',
          'http://v03l0036.global.dns:8080/AES/actuator/health'
        ),
        new Container(
          'tst',
          'http://v03l0037.global.dns:8080/AES/actuator/health'
        ),
        new Container(
          'tst',
          'http://v03l0038.global.dns:8080/AES/actuator/health'
        ),
      ]),
      new Environment('ACC', [
        new Container(
          'ACC',
          'http://v02l0036.global.dns:8080/AES/actuator/health'
        ),
        new Container(
          'ACC',
          'http://v02l0037.global.dns:8080/AES/actuator/health'
        ),
        new Container(
          'ACC',
          'http://v02l0038.global.dns:8080/AES/actuator/health'
        ),
      ]),
    ]),
  ];

  return (
    <>
      <img src={acertaLogo} />
      {projects.map((project) => {
        return <ProjectComponent project={project} />;
      })}
      <AgreementsComponent />
    </>
  );
}

export default App;
