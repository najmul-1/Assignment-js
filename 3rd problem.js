function deleteInvalids(array) {
    if (!Array.isArray(array)) {
      return "Please Provide an array";
    } else {
      let validArray = [];
      for (let num of array) {
        if (typeof num == "number" && !isNaN(num)) {
          validArray.push(num);
        }
      }
      return validArray;
    }
  }