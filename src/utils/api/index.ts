import { apiData } from "./data";
import type { ApiResponse } from "./types";

/**
 * Simulates a fetch call with GET method
 * @param endpoint URL to "fetch" omitting the API's base URL
 * @returns Subset of the fetch's Response, with the json data only
 */
const fetchApi = async (
  endpoint: keyof typeof apiData
): Promise<ApiResponse> => {
  const response: ApiResponse = {
    json: async () => {
      return new Promise((resolve) => {
        setTimeout(() => resolve(apiData[endpoint]), 500);
      });
    }
  };

  return new Promise<ApiResponse>((resolve) => {
    setTimeout(() => resolve(response), 500);
  });
};

export { fetchApi };
