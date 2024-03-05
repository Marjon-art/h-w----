class Validator {
  validateUsername(userName) {
    return /\w\W\d[d{3}\^d\w$]/.test(userName);
  }
}
const result = new Validator("cv-32f");
console.log(result.validateUsername());
