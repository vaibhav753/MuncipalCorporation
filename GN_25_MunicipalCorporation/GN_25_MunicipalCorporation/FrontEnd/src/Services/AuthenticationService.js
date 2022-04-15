
import axios from 'axios';
class AuthenticationService {

  storeUserDetails(data) {
    // console.log('add user');
    //since user has logged in : now for every request to the backend : add req auth interceptor
    sessionStorage.setItem("role", data.role);
    sessionStorage.setItem("tokenId", data.token);

    console.log(sessionStorage.getItem("role"));
    console.log(sessionStorage.getItem("tokenId"));

    this.setupRequestInterceptor(sessionStorage.getItem("tokenId"));
    //user has logged in successfully : so add it's details under session storage
    // sessionStorage.setItem('user_dtls', userName);
  }
  // removeUserDetails() {
  //   console.log('rem user');
  //   sessionStorage.removeItem('user_dtls');
  // }
  // isUserLoggedIn() {
  //   console.log('chk user');
  //   return sessionStorage.getItem('user_dtls') === null ? false : true;
  // }
  // getUserName() {
  //   return sessionStorage.getItem('user_dtls');
  // }

  //set up axios request interceptor for JWT
  setupRequestInterceptor(jwt) {
    //  const basicAuth = 'Basic ' + window.btoa(userName + ':' + password);
    console.log("jwt", jwt);
    axios.interceptors.request.use((config) => {
      //   if (this.isUserLoggedIn()) {
      //     //adding the authorization header to config
      console.log("in function")

      config.headers.authorization = 'Bearer ' + jwt;
      // }
      //   //return config
      return config;
    });

    console.log("out function")
  }
}
//export it's instance , so that it's methods can be called from components
export default new AuthenticationService();
