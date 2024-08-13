import { Project } from '../../classes/Project';
import EnvironmentComponent from '../Environment/EnvironmentComponent';

const ProjectComponent: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-12'>&nbsp;</div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-12'>&nbsp;</div>
      </div>
      <div className='row'>
        <div className='col-sm-12 col-md-12'>
          <h1 className='display-2'>{project.name}</h1>
        </div>
      </div>
      <div className='row'>
        {project.environments.map((environment) => {
          return (
            <div className='col-sm-12 col-md-12'>
              <EnvironmentComponent environment={environment} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectComponent;
