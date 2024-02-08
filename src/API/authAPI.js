
import { AUTH_URLS, BASE_URL } from "../constants";
import{validateUserInput} from '../utility/validationAuth'
const postBody = (body) => {
  return {
    method: "POST",
    body: JSON.stringify(body),
    headers: { 
      "content-type": "application/json",
      "x-auth-token": ""
    },
  }
}

const getBody = () => {
  return {
    method: "GET",
    // body: JSON.stringify(body),
    headers: { 
      "content-type": "application/json",
      "x-auth-token": ""
  },
  }
}

  
// export async function createUser(userData) {
//   // const validationErrors = validateUserInput(userData);

//   // if (Object.keys(validationErrors).length > 0) {
//   //   console.error("Client-side validation error:", validationErrors);
//   //   throw { data: { error: "Validation error", validationErrors } };
//   // }

//   try {
//     const resp = await fetch(`${BASE_URL}/${AUTH_URLS.SIGN_UP}`, postBody(userData));
//     if (resp.ok) {
//       const userdata = await resp.json();
//       console.log(userdata, 'Initially success response');
//       return { userdata };
//     } else {
//       const error = await resp.json();
//       console.log( 'Initially Failure response',error.message);
//           throw error;
//     }
//   } catch (error) {
//     console.error("Error creating user:", error.data.error, 'in CreateUserUserAPICALL');
//     throw error;
//   }
// }


  


export async function createUser(userData,callback) {

  try {
    const resp = await fetch(
      `${BASE_URL}/${AUTH_URLS.SIGN_UP}`,
      postBody(userData)
    );
    if (resp.ok) {
      const userdata = await resp.json();
      const successMessage = userdata.message;

      console.log(successMessage, "Initially success response"); //For new User  before returning response verify token and call API parallely
     alert(successMessage)

    // Dispatch the successMessage to the Redux store
    // store.dispatch(setSuccessMessage(successMessage));

      //a delay of 10 seconds using setTimeout
      await new Promise(resolve => setTimeout(resolve, 10000));

      return {userdata, successMessage}
    }
    else {
      const error = await resp.json();
      console.log( 'Initially Failure response',error.message);
      throw { data: { error: error.message, data: {} } }; 
    }
  } catch (error) {
    console.error("Error creating user:",error.data.error,"in CreateUserUserAPICALL");
    throw error;
  }
}
  export async function loginUser(userData) {
    try {
      const response = await fetch("http://localhost:5000/api/authenticate/", {
        method: "POST",
        body: JSON.stringify(userData),
        headers: { "content-type": "application/json" },
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('error inititally before getting called in thunk',data.data)
        return { data };
      } else {
        const error = await response.json();
        console.log(error.message)
        throw error;
      }
    } catch (error) {
      console.error("Unexpected error during login:", error,'in loginUserAPICALL');
      throw error; 
    }
  }
  
  export async function signOut(userId) {
      try {
        const response = await fetch('http://localhost:5000/api/authenticate/logout');
        if (response.ok) {
          const data = await response.json();
          console.log(data.message)
          return { data };
        } else {
          const error = await response.json();
          console.log(error.message)
          throw error;
        }
      } catch (error) {
        console.error("Unexpected error during logout", error,'in loginUserAPICALL');
        throw error; 
      }

  }



  
  export function checkAuth() {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/check');
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }
  

  export async function resetPasswordRequest(email) {
      try {
        const response = await fetch('http://localhost:8000/auth/send-otp', {
          method: 'POST',
          body: JSON.stringify(email),
          headers: { 'content-type': 'application/json' },
        });
        const data = await response.json();
        if (!response.ok) {
          const errorMessage = data.error || "Invalid Email.";
          throw new Error(errorMessage);
        } 
        return { data };
      } catch (error) {
        console.error("Error during login:", error.message);
        throw error;
      }
  
  
  }
  
  export function resetPassword(data) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch('/auth/reset-password', {
          method: 'POST',
          body: JSON.stringify(data),
          headers: { 'content-type': 'application/json' },
        });
        if (response.ok) {
          const data = await response.json();
          resolve({ data });
        } else {
          const error = await response.text();
          reject(error);
        }
      } catch (error) {
        reject( error );
      }
  
    });
  }


  // Placeholder function for waiting for verification or token expiration
 export  async function waitForVerificationOrTokenExpiration(token) {
    const maxAttempts = 10; // You can adjust the number of attempts
    const delayBetweenAttempts = 300000; // Delay in milliseconds between attempts
  
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
      try {
        // Call an API to check verification status or wait for token expiration
        const verificationStatus = await checkVerificationStatus(token);
  
        if (verificationStatus === 'verified') {
          // Verification successful, break out of the loop
          break;
        } else {
          // Verification not yet successful, wait before the next attempt
          await new Promise(resolve => setTimeout(resolve, delayBetweenAttempts));
        }
      } catch (error) {
        // Handle errors from the API call
        console.error('Error checking verification status:', error);
      }
    }
  }
  

//for checking verification status

export async function checkVerificationStatus(token) {

  //API call to check the verification status
  const resp = await fetch(`${BASE_URL}/api/authenticate`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token, 
    },
  });

  if (!resp.ok) {
    const errorData = await resp.json();
    throw new Error(errorData.message || 'Failed to check verification status');
  }

  const data = await resp.json();
  return data.status; 
}

