async function checkToken() {
  try {
    const token = await global.localStorage.getItem('token')
    if (!token)
      global.location.href = '/login'
  }
  catch (error) {
    console.log('Erro ao verificar token:', error)
  }
}

export { checkToken }
