export function totalCartItems(cartItems) {
  const totalItemsLen = cartItems.reduce((curNum, item) => {
    return curNum + item.productQty;
  }, 0);

  return totalItemsLen;
}
