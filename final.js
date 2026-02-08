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

// Problem-2
function validOtp(otp) {
  if (typeof otp === "string") {
    if (otp.length === 8 && otp.startsWith("ph-")) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid";
  }
}
