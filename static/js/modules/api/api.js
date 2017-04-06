/**
 * Created by tlakatlekutl on 07.03.17.
 */

/* global Net:true, fetch*/

(function apiFunc() {
  class API {

    constructor(
      baseUrl = 'https://fastball-backend.herokuapp.com/api',
      headers = { 'content-type': 'application/json; charset=utf-8' }) {
      if (API.instance) {
        return API.instance;
      }

      this.net = new Net(baseUrl, headers);

      API.instance = this;
    }

    logout() {
      return this.net.post('/logout', null)
                .catch((error) => {
                  console.error(error);
                });
    }

    signup(data) {
      return this.net.post('/signup', data)
                .catch((error) => {
                  console.error(error);
                });
    }

    getUser() {
      return this.net.get('/user')
                .catch((error) => {
                  console.error(error);
                });
    }

    login(data) {
      return this.net.post('/login', data)
                .catch((error) => {
                  console.error(error);
                });
    }

    changePass(data) {
      return this.net.post('/change-password', data)
                .catch((error) => {
                  console.error(error);
                });
    }
    getLeaderBoard() {
      return this.net.get('/leaderboard')
                .catch((error) => {
                  console.error(error);
                });
    }

    }

  window.API = API;
}());
