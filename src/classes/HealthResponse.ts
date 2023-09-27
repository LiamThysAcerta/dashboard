export interface HealthResponse {
  versionInfo: {
    version: string;
    revision: string;
    creationDate: string | null;
  };
  status: string;
}
