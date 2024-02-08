function password(obj) {
    let length = Object.keys(obj).length == 3;
    if (!length) {
      return "Please! Ensure all properties has provided";
    }
    let site = obj.siteName[0].toUpperCase() + obj.siteName.slice(1);
    let name = obj.name;
    let year = obj.birthYear;
    if (site && name && year && year >= 1000 && year <= 9999) {
      return ${site}#${name}@${year};
    } else {
      return "Please! Ensure BirthYear is Valid";
    }
  }
  