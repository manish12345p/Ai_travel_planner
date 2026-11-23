import { isMockMode, getApiBaseUrl, createApiResponse, simulateDelay } from '@/config/api';
import { mockCapabilities } from '@/data/mock/capabilities';

/**
 * Endpoint: GET /api/v1/platform/capabilities
 * Description: Retrieves AiTravelPlanner's 3 real-time spatial capabilities (telemetry, budget, vault).
 *
 * @returns {Promise<{
 *   data: Array<{
 *     id: string,
 *     badge: string,
 *     badgeType: string,
 *     iconKey: string,
 *     title: string,
 *     description: string,
 *     visualization: object
 *   }>|null,
 *   error: string|null,
 *   meta: object
 * }>}
 */
export async function getCapabilities() {
  if (isMockMode()) {
    await simulateDelay(110);
    return createApiResponse(mockCapabilities);
  }

  try {
    const res = await fetch(`${getApiBaseUrl()}/platform/capabilities`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return createApiResponse(json.data);
  } catch (err) {
    return createApiResponse(null, err.message || 'Failed to fetch platform capabilities');
  }
}
