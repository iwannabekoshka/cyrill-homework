// Кнопка добавления дела
const addBtn = document.querySelector("#add-task-form button[type='submit'");
// Инпут с текстом нового дела
const addInput = document.querySelector("input[name='new-todo'");

// Кнопка переключения видимости параграфов
const toggleTextBtn = document.querySelector("#toggle-text");
// Коллекция параграфов
const paragraphs = document.querySelectorAll("#text p");

// Событие при клике на кнопку "Добавить"
addBtn.addEventListener("click", function (event) {
  event.preventDefault();

  const addInputValue = addInput.value;

  if (addInputValue.trim() !== "") {
    alert("Добавляем " + addInputValue);
  } else {
    alert("Нечего добавлять, пусто тут");
  }
});

// Переключение видимости параграфов.
// Это пока не смотри, тут чисто демка для проверки того,
// что футер всегда внизу
toggleTextBtn.addEventListener("click", (e) => {
  paragraphs.forEach((p) => p.classList.toggle("hidden"));
});
