function monthlySavings(arr, livingCost) {
    if (!Array.isArray(arr) && typeof livingCost !== "number") {
      return "Please! Ensure firstOne is an Array and secondOne is a Number";
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= 3000) {
        let tax = (arr[i] * 20) / 100;
        let afterTax = arr[i] - tax;
        sum += afterTax;
      } else {
        sum += arr[i];
      }
    }
    let savings = sum - livingCost;
    if (savings >= 0) {
      return savings;
    } else {
      return "You should Earn More";
    }
  }