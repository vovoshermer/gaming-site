function dialogWithUser() {
  var attempts = 0;
  var maxAttempts = 3;
  var correctAnswer = "javascript";

  var name = prompt("Як тебе звати?");

  alert("Привіт, " + name + "! Зараз пройдемо невеликий тест.");

  var wantsContinue = confirm("Бажаєш пройти вікторину?");
  if (!wantsContinue) {
    alert("Добре, " + name + ". Повертайся!");
    return;
  }

  // Цикл — даємо 3 спроби відповісти
  while (attempts < maxAttempts) {
    var answer = prompt("Питання: Яку мову програмування ми вивчаємо?\n(Спроба " + (attempts + 1) + " з " + maxAttempts + ")");

    if (answer === null) {
      alert("Ти скасував відповідь.");
      break;
    }

    if (answer.toLowerCase() === correctAnswer) {
      alert("Правильно, " + name );
      return;
    } else {
      attempts++;
      if (attempts < maxAttempts) {
        alert("Неправильно");
      }
    }
  }

  alert("Правильна відповідь: JavaScript. Наступного разу пощастить, " + name + "!");
}


// ================================================
// 2. ФУНКЦІЯ виводу інформації про розробника
//    Параметр «посада» — значення за замовчуванням
// ================================================
function showDeveloperInfo(lastName, firstName, position = "Студент") {
  alert(
    "👤 Інформація про розробника:\n" +
    "Прізвище: " + lastName + "\n" +
    "Ім'я: " + firstName + "\n" +
    "Посада: " + position
  );
}


// ================================================
// 3. ФУНКЦІЯ порівняння двох рядків
//    Більший (за довжиною) виводиться через alert
// ================================================
function compareTwoStrings() {
  var str1 = prompt("Введи перший рядок:");
  if (str1 === null) return;

  var str2 = prompt("Введи другий рядок:");
  if (str2 === null) return;

  var longer;
  if (str1.length > str2.length) {
    longer = str1;
  } else if (str2.length > str1.length) {
    longer = str2;
  } else {
    alert("Рядки однакової довжини:\n\"" + str1 + "\"");
    return;
  }

  alert("Довший рядок:\n\"" + longer + "\"\n(символів: " + longer.length + ")");
}


// ================================================
// 4. ЗМІНА ФОНУ СТОРІНКИ НА 30 СЕКУНД
//    Використовує document.body.style
// ================================================
function changeBackgroundFor30s() {
  var originalBg = document.body.style.backgroundColor;
  document.body.style.backgroundColor = "#1a0033";
  document.body.style.transition = "background-color 0.5s";

  alert("Фон змінено на 30 секунд!");

  setTimeout(function () {
    document.body.style.backgroundColor = originalBg || "";
    alert("Фон повернуто до початкового.");
  }, 30000);
}
