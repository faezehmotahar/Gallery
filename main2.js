document.addEventListener("DOMContentLoaded", function() {
  const toast = document.getElementById("toast");

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000); // بعد ۳ ثانیه محو میشه
  }

  // فرم ورود
  const loginForm = document.getElementById("loginForm");
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let email = document.getElementById("loginEmail");
    let password = document.getElementById("loginPassword");
    let valid = true;

    [email, password].forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "1px solid #ced4da";
      }
    });

    if (valid) {
      showToast("ورود موفقیت‌آمیز ✅");
      loginForm.reset();
    }
  });

  // فرم ثبت‌نام
  const signupForm = document.getElementById("signupForm");
  signupForm.addEventListener("submit", function(e) {
    e.preventDefault();
    let name = document.getElementById("signupName");
    let email = document.getElementById("signupEmail");
    let password = document.getElementById("signupPassword");
    let passwordRepeat = document.getElementById("signupPasswordRepeat");
    let valid = true;

    [name, email, password, passwordRepeat].forEach(input => {
      if (input.value.trim() === "") {
        input.style.border = "2px solid red";
        valid = false;
      } else {
        input.style.border = "1px solid #ced4da";
      }
    });

    if (password.value !== passwordRepeat.value) {
      password.style.border = "2px solid red";
      passwordRepeat.style.border = "2px solid red";
      valid = false;
    }

    if (valid) {
      showToast("ثبت‌نام موفقیت‌آمیز 🎉");
      signupForm.reset();
    }
  });

});


