const fullName = document.querySelector(".profile__form__input__fullName");
const birthYearInput = document.querySelector(".profile__form__input__birthYear");
const email = document.querySelector(".profile__form__input__email");
const hobby = document.querySelector(".profile__form__input__hobby");
const genderSelect = document.querySelector("#gender");
const resultContent = document.querySelector("#resultContent");
const saveBtn = document.querySelector("#saveBtn");
const clearBtn = document.querySelector("#clearBtn");

fullName.addEventListener("input", () => {
  if (fullName.value.length > 50) fullName.value = fullName.value.slice(0, 50);
});

birthYearInput.addEventListener("input", () => {
  if (birthYearInput.value.length > 4) birthYearInput.value = birthYearInput.value.slice(0, 4);
});

email.addEventListener("input", () => {
  if (email.value.length > 50) email.value = email.value.slice(0, 50);
});

hobby.addEventListener("input", () => {
  if (hobby.value.length > 30) hobby.value = hobby.value.slice(0, 30);
});

function getAgeCategory(age) {
  if (age < 13) return "Child";
  if (age < 18) return "Teenager";
  if (age < 65) return "Adult";
  if (age <= 100) return "Senior";
  return "Are u human?";
}

function getGenderText(value) {
  switch(value) {
    case "male": return "Erkak";
    case "female": return "Ayol";
    case "other": return "Boshqa";
    default: return "Noma'lum";
  }
}

saveBtn.addEventListener("click", () => {
  const name = fullName.value.trim();
  const birthYear = parseInt(birthYearInput.value);

  const currentYear = 2025;

  const age = isNaN(birthYear) ? "Noma'lum" : currentYear - birthYear;
  const genderValue = genderSelect.value;
  const genderText = getGenderText(genderValue);
  const ageCategory = typeof age === "number" ? getAgeCategory(age) : "";

  if (!name || !birthYear || !genderValue) {
    resultContent.innerHTML = "<p>Nothing . . . . . .</p>";
    return;
  }

  resultContent.innerHTML = `
    <p><strong>To‘liq ism</strong> ${name}</p>
    <p><strong>Yosh</strong> ${age} yosh</p>
    <p><strong>Name of age </strong> <span class="age__category">${ageCategory}</span></p>
    <p><strong>Jins</strong> ${genderText}</p>
    <p><strong>Email</strong> ${email.value || "Kiritilmagan"}</p>
    <p><strong>Hobby</strong> ${hobby.value || "Yo‘q"}</p>
    <p><strong>Tug‘ilgan yili</strong> ${birthYear}</p>
  `;
});

clearBtn.addEventListener("click", () => {
  fullName.value = "";
  birthYearInput.value = "";
  email.value = "";
  hobby.value = "";
  genderSelect.value = "";
  resultContent.innerHTML = "Empty . . . . .";
});