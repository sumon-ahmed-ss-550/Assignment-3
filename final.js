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

// Problem-3
function finalScore(omr) {
  let right = omr["right"];
  let wrong = omr["wrong"];
  let skip = omr["skip"];
  const total = right + wrong + skip;
  if (
    typeof right !== "number" ||
    typeof wrong !== "number" ||
    typeof skip !== "number" ||
    typeof total !== "number"
  ) {
    return "Invalid";
  }
  if (total !== 100) {
    return "Invalid";
  } else {
    const totalDecrement = wrong * 0.5;
    let totalRight = right - totalDecrement;
    totalRight = Math.round(totalRight);
    return totalRight;
  }
}

// Problem-4
function gonoVote(array) {
  let ha = 0;
  let na = 0;
  if (!Array.isArray(array)) {
    return "Invalid";
  } else {
    for (const item of array) {
      if (item === "ha") {
        ha++;
      } else {
        na++;
      }
    }
  }

  if (ha > na) {
    return true;
  } else if (ha === na) {
    return "equal";
  } else {
    return false;
  }
}
