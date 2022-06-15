import axios from 'axios';
const APT_url = 'http://localhost:5000/posts';

const postServices = {
   add,
};
function add(data) {
   return axios({
      method: 'post',
      url: `${APT_url}/add`,
      data: data,
   });
}
export default postServices;
