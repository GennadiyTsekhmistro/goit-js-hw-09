const form = document.querySelector(".feedback-form");
const STORAGE_KEY = "feedback-form-state";

// 1. Відновлення даних при завантаженні сторінки
const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (savedData) {
  form.elements.email.value = savedData.email || "";
  form.elements.message.value = savedData.message || "";
}

// 2. Збереження даних при вводі
form.addEventListener("input", () => {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

// 3. Обробка відправки форми
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  console.log("Form submitted:", formData);

  // очищаємо сховище і форму
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
