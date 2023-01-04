export const stringToDate = (dt) => {
  const date = new Date(dt);
  return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
};

export const getPrice = (price) => {
  return `RS. ${price}`;
};
