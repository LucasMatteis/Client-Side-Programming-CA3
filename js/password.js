// Passwrod validator

//Changes id and class
function _id(name) {
  return document.getElementById(name);
}
function _class(name) {
  return document.getElementsByClassName(name);
}

//Form animation
_id("password-field").addEventListener("focus", function () {
  _class("password-policies")[0].classList.add("active");
});
_id("password-field").addEventListener("blur", function () {
  _class("password-policies")[0].classList.remove("active");
});

//Checks policy and highlight
_id("password-field").addEventListener("keyup", function () {
  let password = _id("password-field").value;

  if (password.length > 7) {
    _class("policy-length")[0].classList.add("active");
  } else {
    _class("policy-length")[0].classList.remove("active");
  }
  if (/[0-9]/.test(password)) {
    _class("policy-number")[0].classList.add("active");
  } else {
    _class("policy-number")[0].classList.remove("active");
  }

  if (/[A-Z]/.test(password)) {
    _class("policy-uppercase")[0].classList.add("active");
  } else {
    _class("policy-uppercase")[0].classList.remove("active");
  }

  if (/[a-z]/.test(password)) {
    _class("policy-lowercase")[0].classList.add("active");
  } else {
    _class("policy-lowercase")[0].classList.remove("active");
  }

  if (/[^A-Za-z0-9]/.test(password)) {
    _class("policy-special")[0].classList.add("active");
  } else {
    _class("policy-special")[0].classList.remove("active");
  }

});

