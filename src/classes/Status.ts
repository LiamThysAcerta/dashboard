export default interface Status {
  status: string;
  versionInfo: {
    version: string;
    revision: string;
    creationDate: string | null;
  };
}

export class DownStatus implements Status {
  status = 'DOWN';
  versionInfo = {
    version: '-',
    revision: '-',
    creationDate: '-',
  };
}
