// users.js
import axios from 'axios';

class Users {
  static async all() {
    try {
      console.log("AAAAAAAAAA CAL IN")
      const resp = await axios.get('/users.json');

      console.log("AAAAAAAAAAAAAAAAAA REST:", resp)

      return resp.data;      
    }
    catch(e) {
      console.log('[Users.all] failed called axios get');
    }
  }
}

export default Users;