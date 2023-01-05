export const stringToDate = (dt) => {
  const date = new Date(dt);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export const getPrice = (price) => {
  return `RS. ${price}`;
};

export const getDateFormate = (dob) => {
  return `${new Date(dob).getDate()}-${new Date(dob).getMonth()}-${new Date(
    dob
  ).getFullYear()}`;
};

export const executeWithTime = (obj, message) => {
  const d = new Date();
  return console.log(obj, d.toLocaleTimeString() + " - " + message);
};
