import { useState, useEffect } from 'react';
import axios from 'axios';
import { HealthResponse } from '@/classes/HealthResponse';

const ServerComponent: React.FC<{ environment: string; url: string }> = ({
  environment,
  url,
}) => {
  const [status, setStatus] = useState<HealthResponse | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responeURL = `${url}`;

        const response = await axios.get<HealthResponse>(responeURL);

        const statusData = responseToStatus(response.data);

        setStatus(statusData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [url]);

  const responseToStatus = (response: HealthResponse): HealthResponse => {
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
        <div className='card-header font-weight-bold font-4xl'>
          {environment}
        </div>
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
