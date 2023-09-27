import Environment from '../../classes/Environment';
import ServerComponent from '../Server/ServerComponent';

const EnvironmentComponent: React.FC<{ environment: Environment }> = ({
  environment,
}) => {
  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-12'>
          <h5>{environment.name}</h5>
        </div>
      </div>
      <div className='row'>
        {environment.servers.map((server) => {
          return (
            <div className='col-sm-6 col-md-4'>
              <ServerComponent server={server} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default EnvironmentComponent;
