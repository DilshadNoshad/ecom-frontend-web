import {
  FIREBASE_AUTH_ANONSIGNIN,
  FIREBASE_AUTH_SIGNIN,
  FIREBASE_AUTH_SIGNUP,
  JAVA_SVC,
} from "../config";

export async function addUser(userData) {
  //const URL = "http://localhost:8080/api/users";
  //const URL = `${JAVA_SVC}/users`
  const URL = `${JAVA_SVC}/users`;
  //console.log(URL);
  //console.log(userData);

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const resData = await data;

  //console.log(resData);
  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  return resData;
}

const URLs = "http://localhost:8080/api/users/add";
/*
  const userVar = {
    "username": userData.email,
        "firstName": "",
        "middleName": "",
        "lastName": userData.displayName,
        "emailId": userData.email,
        "type": 1
  }
  console.log(userVar);
*/
export async function addUserData(userData) {
  const userVar = {
    username: "test11@hotmail.com",
    firstName: "",
    middleName: "",
    lastName: "test11",
    emailId: "test11@email.com",
    type: 1,
  };

  let result = {};
  const saveUser = await fetch(URLs, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userVar),
  });

  const data = await saveUser.json();
  const resData = await data;
  //console.log(data);

  return {};
}
export async function signInUser(userData) {
  //const URL = 'http://localhost:8080/api/users/signin?email='+userData.email+'&pass='+userData.pass;
  const URL = `${JAVA_SVC}/users/signin?email=${userData.email}&pass=${userData.pass}`;
  //console.log(userData);
  //console.log(URL);
  const response = await fetch(URL, {
    method: "GET",
  });

  const data = await response.json();
  const resData = await data;
  //   .then((resData) => {
  //     return resData;
  //   });

  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  //console.log(resData);
  return resData;
}

export async function signInUserF(userData) {
  const response = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAmWTUMTMgGa2bymkrbaEbIxjsb-7ou1wo`,
    {
      method: "POST",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();
  const resData = await data;
  //   .then((resData) => {
  //     return resData;
  //   });

  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  return resData;
}
export async function AnonSignInUser(userData) {
  const response = await fetch(`${FIREBASE_AUTH_ANONSIGNIN}`, {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const resData = await data;
  //   .then((resData) => {
  //     return resData;
  //   });

  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }

  return resData;
}

export async function getUserById(id) {
  const URL = `http://localhost:8080/api/users/${id}`;
  //console.log(userData);
  //console.log('------------get user by id-------------');

  const response = await fetch(URL, {
    method: "GET",
  });

  const data = await response.json();
  const resData = await data;
  //   .then((resData) => {
  //     return resData;
  //   });

  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  //console.log(resData);
  return resData;
}

export async function updateUser(userData) {
  //const URL = `http://localhost:8080/api/users/${userData.userId}`;
  const URL = `${JAVA_SVC}/users/${userData.userId}`;

  //console.log('----------udpate user ------------');
  //console.log(userData);

  const response = await fetch(URL, {
    method: "PUT",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const resData = await data;
  //console.log('-----------updated user ----------------');
  //console.log(resData);
  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  return resData;
}

export async function AddAddress(addData) {
  const URL = `${JAVA_SVC}/address`;

  //console.log('----------add address ------------');
  //console.log(addData);

  const response = await fetch(URL, {
    method: "POST",
    body: JSON.stringify(addData),
    //mode:'no-cors',
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const resData = await data;
  //console.log('-----------updated user ----------------');
  //console.log(resData);
  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  return resData;
}

export async function updateAddress(addData) {
  const URL = `${JAVA_SVC}/address/${addData.AddressId}`;
  console.log("----------update user ------------");
  //console.log(addData);

  const response = await fetch(URL, {
    method: "PUT",
    body: JSON.stringify(addData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const resData = await data;
  //console.log('-----------updated user ----------------');
  //console.log(resData);
  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  return resData;
}

export async function getCityList1() {
  const URL = `${JAVA_SVC}/city`;
  //console.log(userData);
  //console.log('------------get city -------------');

  const response = await fetch(URL, {
    method: "GET",
  });

  const data = await response.json();
  const resData = await data;
  //   .then((resData) => {
  //     return resData;
  //   });

  if (!response.ok) {
    let errorMessage;
    if (data && data.error && data.error.message) {
      errorMessage = data.error.message;
    }
    throw new Error(errorMessage);
  }
  //console.log(resData);
  return resData;
}

export async function getCityList() {
  const response = await fetch(`${JAVA_SVC}/city`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
}

export async function getAddressList() {
  const response = await fetch(`${JAVA_SVC}/address/getAddressByUserId/30`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
}

export async function getUserOrderList() {
  const response = await fetch(`${JAVA_SVC}/orders/getuserorder/30`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
}

export async function getUserOrderdetails(orderDetailId) {
  const response = await fetch(`${JAVA_SVC}/orderdetails/${orderDetailId}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch product detail.");
  }

  return data;
}
