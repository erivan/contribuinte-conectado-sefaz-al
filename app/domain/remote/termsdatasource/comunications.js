import axios from 'axios';
import terms from './terms.json';
import AuthRepository from './../../local/authenticationdatasource/AuthRepository';

export const BASE_URL = 'http://hackathonapi.sefaz.al.gov.br/'


const loadTerms = (user) => {
  const logedIn = AuthRepository.logedIn();

  return axios({
    method: 'post',
    baseURL: BASE_URL,
    url: '/sfz_fronteiras_api/api/public/termoApreensao/consultar',
    timeout: 3000,
    headers: { Authorization: `Bearer ${logedIn.token}` },
    data: {
      numeroCaceal: logedIn.login
    },
  })
}

const mockTerms = (identifier) => {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(terms)
      }, 100)
  });

};
export { mockTerms, loadTerms }
