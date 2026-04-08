const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// 🔑 глобальний об'єкт з початковими значеннями
let formData = {
  email: "",
  message: "",
};

// 1. Відновлення даних при завантаженні сторінки
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  formData = savedData;
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
} else {
  form.elements.email.value = "";
  form.elements.message.value = "";
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
