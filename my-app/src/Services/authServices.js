import axios from 'axios';
const APT_url = 'http://localhost:5000/users';

const authServices = {
   register,
   login,
   logout,
};

function register(data) {
   return axios({
      method: 'post',
      url: `${APT_url}/register`,
      data: data,
   });
}
function login(user) {
   return axios({
      method: 'post',
      url: `${APT_url}/login`,
      data: user,
   });
}
function logout() {
   return axios({
      method: 'get',
      url: `${APT_url}/logout`,
   });
}

export default authServices;
