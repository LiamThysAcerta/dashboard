export interface HealthResponse {
  build: {
    name: string;
    version: string;
    time: string | null;
  };
}
