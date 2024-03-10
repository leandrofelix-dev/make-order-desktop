async function getUserCredentials() {
  try {
    const credentials = JSON.parse(await global.localStorage.getItem('user'))
    if (!credentials) {
      global.location.href = '/conta/login'
      return null
    }
    return credentials
  }
  catch (error) {
    console.log('Erro ao verificar token:', error)
  }
}

export { getUserCredentials }
