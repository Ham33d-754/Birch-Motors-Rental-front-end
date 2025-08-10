import Client from './api'

export const checkSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get(`/auth/checkSession`)
    return res.data
  } catch (error) {
    throw error
  }
}
export default checkSession
