import { isMockMode, getApiBaseUrl, createApiResponse, simulateDelay } from '@/config/api';
import { mockHeroData } from '@/data/mock/hero';

/**
 * Endpoint: GET /api/v1/content/hero
 * Description: Retrieves hero banner content, search configuration, and exploration filter pills.
 *
 * @returns {Promise<{
 *   data: {
 *     badge: { brand: string, subtitle: string },
 *     heading: string,
 *     subheading: string,
 *     searchPlaceholder: string,
 *     filters: Array<{ id: string, label: string }>
 *   }|null,
 *   error: string|null,
 *   meta: object
 * }>}
 */
export async function getHeroData() {
  if (isMockMode()) {
    await simulateDelay(60);
    return createApiResponse(mockHeroData);
  }

  try {
    const res = await fetch(`${getApiBaseUrl()}/content/hero`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return createApiResponse(json.data);
  } catch (err) {
    return createApiResponse(null, err.message || 'Failed to fetch hero content');
  }
}
