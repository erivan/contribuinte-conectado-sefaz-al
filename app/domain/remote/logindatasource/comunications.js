import axios from 'axios'

export const BASE_URL = 'http://hackathonapi.sefaz.al.gov.br/'


const requestAuthorization = (user) => {
  return axios({
    method: 'post',
    baseURL: BASE_URL,
    url: '/sfz-habilitacao-aplicativo-api/api/public/autorizacao-aplicativo/solicitar',
    timeout: 3000,
    data: {
      login: user,
      nomeDispositivo: 'allConnected',
      tokenApp: '8a1243604c1c2407cce1bb10acf60110028d7c86'
    },
  })
}


const requestAuthorize = (requestParams) => {
  const params = {
    login: requestParams.login,
    idAutorizacao: requestParams.idAutorizacao,
    tokenApp: '8a1243604c1c2407cce1bb10acf60110028d7c86'
  }
  console.log(params)
  return axios({
    method: 'post',
    baseURL: BASE_URL,
    url: '/api/public/autenticar',
    timeout: 3000,
    data: params
  })
}
export { requestAuthorization, requestAuthorize }
