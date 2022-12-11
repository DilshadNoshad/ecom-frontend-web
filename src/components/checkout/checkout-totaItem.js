export function totalCheckoutItems(checkoutItems) {
  const allTotalItemsLen = checkoutItems.reduce((curNum, item) => {
    return curNum + item.productQty;
  }, 0);

  return allTotalItemsLen;
}

export function checkoutItemsLen(checkoutItems) {
  const totalItemsLen = checkoutItems.length;

  return totalItemsLen;
}
