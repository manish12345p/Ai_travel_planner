import { isMockMode, getApiBaseUrl, createApiResponse, simulateDelay } from '@/config/api';
import { mockBlueprints, mockBlueprintsMeta } from '@/data/mock/blueprints';

/**
 * Endpoint: GET /api/v1/blueprints
 * Description: Retrieves curated collective travel intelligence blueprints.
 *
 * @param {object} [params={}]
 * @param {number} [params.limit=4]
 * @returns {Promise<{
 *   data: {
 *     blueprints: Array<{
 *       id: string,
 *       slug: string,
 *       title: string,
 *       category: string,
 *       rating: number,
 *       description: string,
 *       estimatedCost: string,
 *       duration: string,
 *       imageKey: string
 *     }>,
 *     metaInfo: {
 *       totalCount: number,
 *       sectionKicker: string,
 *       sectionTitle: string,
 *       actionLabel: string
 *     }
 *   }|null,
 *   error: string|null,
 *   meta: object
 * }>}
 */
export async function getBlueprints(params = {}) {
  const limit = params.limit || 4;

  if (isMockMode()) {
    await simulateDelay(130);
    return createApiResponse({
      blueprints: mockBlueprints.slice(0, limit),
      metaInfo: mockBlueprintsMeta,
    });
  }

  try {
    const query = new URLSearchParams(params).toString();
    const res = await fetch(`${getApiBaseUrl()}/blueprints?${query}`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return createApiResponse(json.data);
  } catch (err) {
    return createApiResponse(null, err.message || 'Failed to fetch curated blueprints');
  }
}
