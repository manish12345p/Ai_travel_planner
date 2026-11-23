import { isMockMode, getApiBaseUrl, createApiResponse, simulateDelay } from '@/config/api';
import { mockCtaData } from '@/data/mock/cta';

/**
 * Endpoint: GET /api/v1/content/cta
 * Description: Retrieves call to action conversion banner data.
 *
 * @returns {Promise<{
 *   data: {
 *     badge: string,
 *     heading: string,
 *     description: string,
 *     primaryAction: { label: string, href: string },
 *     secondaryAction: { label: string, href: string }
 *   }|null,
 *   error: string|null,
 *   meta: object
 * }>}
 */
export async function getCtaData() {
  if (isMockMode()) {
    await simulateDelay(80);
    return createApiResponse(mockCtaData);
  }

  try {
    const res = await fetch(`${getApiBaseUrl()}/content/cta`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return createApiResponse(json.data);
  } catch (err) {
    return createApiResponse(null, err.message || 'Failed to fetch CTA content');
  }
}
