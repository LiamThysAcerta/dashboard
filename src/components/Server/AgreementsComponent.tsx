import { AgreementContract } from '@/classes/AgreementContract';
import { HealthResponse } from '@/classes/HealthResponse';
import axios from 'axios';
import { useEffect, useState } from 'react';

const AgreementsComponent: React.FC<{}> = ({}) => {
  const [AgreementContract, setAgreementContract] =
    useState<AgreementContract | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let responeURL = `http://t-dicco-backend.global.dns/dicco-rest/v1/business-organisations?iamReferenceTimestamp=2024-05-13T13:37:57.669914&companyOrganisationNumber=731130&firstName=&lastName=&agreementTypeCode=1&activeInCode=1&agreementNumber=&socialSecurityNumber=&externalReferenceTypeCode=01&externalReferenceNumber=&partyNumber=00011227944&groupCode=&employmentStartDate=&employmentStartDateMax=&employmentEndDate=&employmentEndDateMax=&steeringGroupNumber=&costCenterNumber=`;

        const response = await axios.get<HealthResponse>(responeURL);

        const statusData = responseToStatus(response.data);

        console.log(response);
        setAgreementContract(statusData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const responseToStatus = (response: AgreementContract): AgreementContract => {
    return {
      firstName: response.firstName,
      lastName: response.firstName,
      partyNumber: response.firstName,
      agreementNumber: response.firstName,
      serviceReceiverNumber: response.firstName,
      serviceProviderIdentificationNumber: response.firstName,
      agreementTypeCode: response.firstName,
      employmentStartDate: response.firstName,
      employmentEndDate: response.firstName,
      securityTypeCode: response.firstName,
      securityZone: response.firstName,
    };
  };

  return (
    <>
      <div></div>
    </>
  );
};

export default AgreementsComponent;
