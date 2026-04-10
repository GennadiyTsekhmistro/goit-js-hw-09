const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// 🔑 глобальний об'єкт з початковими значеннями
let formData = {
  email: "",
  message: "",
};

// 1. Відновлення даних при завантаженні сторінки
let savedData = null;

try {
  savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
} catch (error) {
  savedData = null;
}

if (savedData) {
  formData = savedData;
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

// 2. Делегування: слухаємо input на формі
form.addEventListener("input", (event) => {
  if (event.target.name === "email" || event.target.name === "message") {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
  }
});

// 3. Обробка відправки форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // перевірка заповненості полів
  if (!formData.email.trim() || !formData.message.trim()) {
    alert("Fill please all fields");
    return;
  }

  console.log("Form submitted:", formData);

  // очищаємо сховище і форму
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = { email: "", message: "" };
});


// states

// const formStates = document.querySelector(".feedback-states");
// const STORAGE_KEY_STATES = "feedback-states-form-state";

// let formDataStates = {
//   email: "",
//   message: "",
// };

// // Відновлення даних
// let savedDataStates = null;

// try {
//   savedDataStates = JSON.parse(localStorage.getItem(STORAGE_KEY_STATES));
// } catch (error) {
//   savedDataStates = null;
// }

// if (savedDataStates) {
//   formDataStates = savedDataStates;
//   formStates.elements.email.value = savedDataStates.email || "";
//   formStates.elements.message.value = savedDataStates.message || "";
// }

// // Делегування input
// formStates.addEventListener("input", (event) => {
//   if (event.target.name === "email" || event.target.name === "message") {
//     formDataStates[event.target.name] = event.target.value;
//     localStorage.setItem(STORAGE_KEY_STATES, JSON.stringify(formDataStates));
//   }
// });

// // Відправка
// formStates.addEventListener("submit", (event) => {
//   event.preventDefault();

//   if (!formDataStates.email.trim() || !formDataStates.message.trim()) {
//     alert("Fill please all fields");
//     return;
//   }

//   console.log("Form submitted (states):", formDataStates);

//   localStorage.removeItem(STORAGE_KEY_STATES);
//   formStates.reset();
//   formDataStates = { email: "", message: "" };
// });