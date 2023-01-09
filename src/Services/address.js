import { JAVA_SVC } from "../config";

// export async function AddAddress(addData) {
//   const response = await fetch(`${JAVA_SVC}/address`, {
//     method: "POST",
//     body: JSON.stringify(addData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });

//   const data = await response.json();
//   const resData = await data;

//   if (!response.ok) {
//     let errorMessage;
//     if (data && data.error && data.error.message) {
//       errorMessage = data.error.message;
//     }
//     throw new Error(errorMessage);
//   }
//   return resData;
// }

export async function getCityList() {
  const response = await fetch(`${JAVA_SVC}/city`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch cities.");
  }

  const citylst = data.map((obj) => {
    return {
      label: `${obj.cityName} - (${obj.cityCode})`,
      name: obj.cityName,
      code: obj.cityCode,
      value: obj.cityId,
      cityId: obj.cityId,
      stateId: obj.stateId,
      countryId: obj.countryId,
    };
  });
  return citylst;
}

export async function AddAddress(addData) {
  const response = await fetch(`${JAVA_SVC}/address`, {
    method: "POST",
    body: JSON.stringify(addData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create address.");
  }

  return null;
}

export async function getAddressList(id) {
  const response = await fetch(`${JAVA_SVC}/address/getAddressByUserId/${id}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch products.");
  }

  return data;
}
