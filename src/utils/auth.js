const API_BASE = import.meta.env.DEV ? '' : import.meta.env.VITE_API_URL

async function request(path, options = {}) {
  if (!API_BASE && !import.meta.env.DEV) {
    throw new Error('VITE_API_URL no configurada')
  }

  const response = await fetch(`${API_BASE}${path}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
    ...options,
  })

  const contentType = response.headers.get('content-type') || ''
  const isJson = contentType.includes('application/json')
  const payload = isJson ? await response.json().catch(() => null) : await response.text().catch(() => '')

  if (!response.ok) {
    const message =
      (payload && payload.message) ||
      (typeof payload === 'string' ? payload : '') ||
      `Error ${response.status}`
    throw new Error(message)
  }

  return payload
}

export async function registerUser(userPayload) {
  const data = await request('/api/auth/register', {
    method: 'POST',
    body: JSON.stringify(userPayload),
  })
  return data
}

export async function loginUser(credentials) {
  const data = await request('/api/auth/login', {
    method: 'POST',
    body: JSON.stringify(credentials),
  })
  return data
}

export function persistToken(token) {
  if (token) localStorage.setItem('authToken', token)
}
