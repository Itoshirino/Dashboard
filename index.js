const fullName = document.querySelector(".profile__form__input__fullName");
const age = document.querySelector(".profile__form__input__age");
const email = document.querySelector(".profile__form__input__email");
const hobby = document.querySelector(".profile__form__input__hobby");
const birthYear = document.querySelector(".profile__form__input__birthYear");
const resultContent = document.querySelector("#resultContent");
const saveBtn = document.querySelector("#saveBtn");
const clearBtn = document.querySelector("#clearBtn");

fullName.addEventListener("input", () => {
  if (fullName.value.length > 50) {
    fullName.value = fullName.value.slice(0, 50).trim().toLowerCase();
  }
});

age.addEventListener("input", () => {
  if (age.value.length > 3) {
    age.value = age.value.slice(0, 3).trim().toUpperCase();
  }
});

birthYear.addEventListener("input", () => {
  if (birthYear.value.length > 4) {
    birthYear.value = birthYear.value.slice(0, 4).trim().toLowerCase();
  }
});

email.addEventListener("input", () => {
  if (email.value.length > 50) {
    email.value = email.value.slice(0, 50).trim().toUpperCase();
  }
});

hobby.addEventListener("input", () => {
  if (hobby.value.length > 30) {
    hobby.value = hobby.value.slice(0, 30).trim().toLowerCase();
  }
});

saveBtn.addEventListener("click", () => {
  resultContent.innerHTML = `
    <p><strong>To‘liq ism:</strong> ${fullName.value}</p>
    <p><strong>Yosh:</strong> ${age.value}</p>
    <p><strong>Email:</strong> ${email.value}</p>
    <p><strong>Hobby:</strong> ${hobby.value}</p>
    <p><strong>Tug‘ilgan yil:</strong> ${birthYear.value}</p>
  `;
});

clearBtn.addEventListener("click", () => {
  fullName.value = "";
  age.value = "";
  email.value = "";
  hobby.value = "";
  birthYear.value = "";
  resultContent.textContent = "Empty...";
});
