const result1 = /^[a-zA-Z][\w-]+[a-zA-Z]$/;
const result2 = /\d{3}/;

class Validator {
  validateUsername(userName) {
    return result1.test(userName) && !result2.test(userName);
  }
}

