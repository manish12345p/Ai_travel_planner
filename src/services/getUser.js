import { isMockMode, getApiBaseUrl, createApiResponse, simulateDelay } from '@/config/api';
import { mockUser } from '@/data/mock/user';

/**
 * Endpoint: GET /api/v1/user/me
 * Description: Retrieves the active user profile, settings, and badge status.
 *
 * @returns {Promise<{
 *   data: {
 *     id: string,
 *     name: string,
 *     avatarKey: string,
 *     currency: string,
 *     language: string,
 *     unreadNotifications: number
 *   }|null,
 *   error: string|null,
 *   meta: object
 * }>}
 */
export async function getUser() {
  if (isMockMode()) {
    await simulateDelay(80);
    return createApiResponse(mockUser);
  }

  try {
    const res = await fetch(`${getApiBaseUrl()}/user/me`, {
      headers: { 'Content-Type': 'application/json' },
    });
    if (!res.ok) throw new Error(`HTTP error ${res.status}`);
    const json = await res.json();
    return createApiResponse(json.data);
  } catch (err) {
    return createApiResponse(null, err.message || 'Failed to fetch user profile');
  }
}
