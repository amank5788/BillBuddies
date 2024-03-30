import axios from "axios";

// AuthService.js
class AuthService {
    async login(data, setError) {
        try {
            
            const response= await axios.post('http://localhost:8000/api/v1/users/login', data);
            if(response){
                //console.log(response.data.data.user);
               
                localStorage.setItem('accessToken', response.data.data.accessToken);
                localStorage.setItem('refreshToken', response.data.data.refreshToken);
                return response.data.data;
            }
            else{
                
                setError('error while connecting server')
            }
        } catch (error) {
            
            setError(error.message)
        }
      // Make API call to backend to authenticate user
      // If authentication is successful, store tokens in local storage
    }
  
    async logout(user) {

        try {
            
       const response=  await axios.post('http://localhost:8000/api/v1/users/logout',user);
       if(response){
         return response;
       }
       else{
           
           console.log('error while connecting server')
       }
   } catch (error) {
       
       console.log(error.message)
   }
      // Clear tokens from local storage
    }
  
    async refreshAccessToken() {
      // Make API call to backend to refresh access token using refresh token
      // If refresh is successful, update access token in local storage
    }
  
    getAccessToken() {
      //console.log(localStorage.getItem('accessToken'));
        return localStorage.getItem('accessToken');
      // Get access token from local storage
    }
  
    isAuthenticated() {
      // Check if access token exists and is not expired
    }
  }
  
  export default new AuthService();
  