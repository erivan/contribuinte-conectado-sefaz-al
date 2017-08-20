import axios from 'axios';
import AuthRepository from './../../local/authenticationdatasource/AuthRepository';
import services from './services.json';

const  getServices = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(services.data)
        }, 500)
    })
}
const fetchUserInformation = () => {
  const logedIn = AuthRepository.logedIn();
  console.log(logedIn.login);
  console.log(`Bearer ${logedIn.token}`);

  return axios({
    method: 'get',
    url: 'http://hackathonapi.sefaz.al.gov.br/sfz_cadastro_api/api/public/contribuinte/obterContribuinte/'+logedIn.login ,
    timeout: 3000,
    params: { cnpjNumeroPessoaOuCaceal: logedIn.login },
    headers: { Authorization: `Bearer ${logedIn.token}` },
  });
};
export { getServices, fetchUserInformation };
