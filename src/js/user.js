function Validator(validateUsername) {
  return /\d\w/.test(validateUsername);
  };
  console.log(Validator("njihv-n9_"));
