// Problem-1
function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  } else {
    if (discount < 0 || discount > 100) {
      return "Invalid";
    } else {
      const discountPrice = (currentPrice * discount) / 100;
      let price = currentPrice - discountPrice;
      price = price.toFixed(3);
      return price;
    }
  }
}
