import { isMockMode, getApiBaseUrl, createApiResponse, simulateDelay } from '@/config/api';
import { mockActiveTrip } from '@/data/mock/activeTrip';

/**
 * Endpoint: GET /api/v1/trips/active
 * Description: Retrieves the currently synced itinerary active on the user's AiTravelPlanner session.
 *
 * @returns {Promise<{
 *   data: {
 *     id: string,
 *     title: string,
 *     destination: string,
 *     duration: string,
 *     dateRange: string,
 *     status: string
 *   }|null,
 *   error: string|null,
 *   meta: object
 * }>}
 */
export async function getActiveTrip() {
  if (isMockMode()) {
    await simulateDelay(90);
    return createApiResponse(mockActiveTrip);
  }

  try {
    const res = await fetch(`${getApiBaseUrl()}/trips/active`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return createApiResponse(json.data);
  } catch (err) {
    return createApiResponse(null, err.message || 'Failed to fetch active trip');
  }
}
