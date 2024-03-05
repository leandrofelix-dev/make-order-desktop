import { shell } from 'electron'
import { store } from '../config/store'

function checkToken() {
  const token = store.get('authToken')
  if (!token) shell.openExternal('/login')
  else shell.openExternal('/dashboard')
}

export { checkToken }
