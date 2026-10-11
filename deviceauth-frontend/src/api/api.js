const BASE = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api';

export async function apiRequest(path, options = {}) {
  const token = sessionStorage.getItem('deviceauth_token');
  const headers = { ...(options.body ? { 'Content-Type': 'application/json' } : {}), ...(token ? { Authorization: `Bearer ${token}` } : {}), ...options.headers };
  const response = await fetch(`${BASE}${path}`, { ...options, headers });
  const raw = await response.text();
  let data = null;
  try { data = raw ? JSON.parse(raw) : null; } catch { data = raw; }
  if (!response.ok) {
    const message = data?.detail || data?.message || data?.error || (typeof data === 'string' ? data : `Request failed (${response.status})`);
    throw new Error(message);
  }
  return data;
}
export const saveSession = (data) => { sessionStorage.setItem('deviceauth_token', data.token); sessionStorage.setItem('deviceauth_user', JSON.stringify({ id: data.id, name: data.name, email: data.email, role: data.role })); };
export const getUser = () => { try { return JSON.parse(sessionStorage.getItem('deviceauth_user') || 'null'); } catch { return null; } };
export const clearSession = () => { sessionStorage.removeItem('deviceauth_token'); sessionStorage.removeItem('deviceauth_user'); };
