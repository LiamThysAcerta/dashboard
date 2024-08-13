import { useState, useEffect } from 'react';
import Status from '../../classes/Status';
import axios from 'axios'; // Import axios if you're using it
import { HealthResponse } from '../../classes/HealthResponse';

const ServerComponent: React.FC<{ server: string }> = ({ server }) => {
  const [status, setStatus] = useState<Status | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<HealthResponse>(
          `http://${server}.global.dns:8080/AES/actuator/health`
        );

        const statusData = responseToStatus(response.data);

        setStatus(statusData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [server]);

  const responseToStatus = (response: HealthResponse): Status => {
    return {
      status: response.status,
      versionInfo: {
        version: response.versionInfo.version,
        revision: response.versionInfo.revision,
        creationDate: response.versionInfo.creationDate,
      },
    };
  };

  return (
    <>
      <div
        className={
          'card text-white ' +
          (status?.status == 'UP' ? 'bg-success' : 'bg-danger')
        }
      >
        <div className='card-header font-weight-bold font-4xl'>{server}</div>
        <div className='card-body'>
          <div className='row'>
            <div className='col-4'>Version</div>
            <div className='col-8'>{status?.versionInfo.version}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Creation Date</div>
            <div className='col-8'>{status?.versionInfo.creationDate}</div>
          </div>
          <div className='row'>
            <div className='col-4'>Build Number</div>
            <div className='col-8'>{status?.versionInfo.revision}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServerComponent;
