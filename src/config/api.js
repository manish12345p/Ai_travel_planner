/**
 * API configuration and execution layer.
 * Governs whether the app operates in mock mode or queries a real backend endpoint.
 */

export const isMockMode = () => {
  return process.env.NEXT_PUBLIC_USE_MOCK_API !== 'false';
};

export const getApiBaseUrl = () => {
  return process.env.NEXT_PUBLIC_API_BASE_URL || 'https://api.aitravelplanner.io/v1';
};

/**
 * Standard API response wrapper
 * @template T
 * @param {T} data
 * @param {string|null} error
 * @param {object} [meta={}]
 * @returns {{ data: T, error: string|null, meta: object }}
 */
export const createApiResponse = (data, error = null, meta = {}) => {
  return {
    data,
    error,
    meta: {
      timestamp: new Date().toISOString(),
      mock: isMockMode(),
      ...meta,
    },
  };
};

/**
 * Simulates network latency in mock mode
 * @param {number} [ms=120]
 */
export const simulateDelay = async (ms = 120) => {
  if (isMockMode()) {
    await new Promise((resolve) => setTimeout(resolve, ms));
  }
};
