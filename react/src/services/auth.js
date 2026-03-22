import api from './api'

export async function login(email, password) {
  const { data } = await api.post('/auth/login', { email, password })
  if (data.accessToken) {
    localStorage.setItem('accessToken', data.accessToken)
  }
  return data
}

export async function register(fullName, email, password, role) {
  const { data } = await api.post('/auth/register', { fullName, email, password, role })
  return data
}

export async function getCurrentUser() {
  const { data } = await api.get('/auth/profile')
  return data
}

export function logout() {
  localStorage.removeItem('accessToken')
}
