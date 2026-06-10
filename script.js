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


// ================================================
// ЗАВДАННЯ 1: ПОДІЇ МИШІ
// ================================================

// --- 1а. Функція-обробник для події миші ---
function onMouseEnterHandler(event) {
  event.currentTarget.style.outline = "2px solid #00f5ff";
  event.currentTarget.style.boxShadow = "0 0 10px rgba(0,245,255,0.4)";
}

function onMouseLeaveHandler(event) {
  event.currentTarget.style.outline = "";
  event.currentTarget.style.boxShadow = "";
}

// Призначення через властивість (property)
function assignMousePropertyHandlers() {
  var demoBox = document.getElementById("mouse-demo-box");
  if (!demoBox) return;

  // Через атрибут onclick задано в HTML (onmouseover="onMouseEnterHandler(event)")
  // Через властивість:
  demoBox.onmouseout = onMouseLeaveHandler;
}

// --- 1б. addEventListener — кілька обробників одній події ---
function initMultipleListeners() {
  var btn = document.getElementById("multi-listener-btn");
  if (!btn) return;

  btn.addEventListener("click", function firstHandler(e) {
    var log = document.getElementById("event-log");
    if (log) log.insertAdjacentHTML("beforeend", "<div class='log-line'>Обробник 1: клік зафіксовано</div>");
  });

  btn.addEventListener("click", function secondHandler(e) {
    var log = document.getElementById("event-log");
    if (log) log.insertAdjacentHTML("beforeend", "<div class='log-line'>Обробник 2: координати x=" + e.clientX + " y=" + e.clientY + "</div>");
  });

  btn.addEventListener("click", function thirdHandler(e) {
    var log = document.getElementById("event-log");
    if (log) log.insertAdjacentHTML("beforeend", "<div class='log-line'>Обробник 3: час — " + new Date().toLocaleTimeString() + "</div>");
  });
}

var objectHandler = {
  handleEvent: function(event) {
    var log = document.getElementById("event-log");
    var el = event.currentTarget;
    if (log) {
      log.insertAdjacentHTML("beforeend",
        "<div class='log-line'>Об'єкт-обробник"
      );
    }
  }
};

function initObjectHandler() {
  var box = document.getElementById("object-handler-box");
  if (!box) return;
  box.addEventListener("mouseover", objectHandler);
}

// --- 1г. Видалення обробника через removeEventListener ---
function removeObjectHandler() {
  var box = document.getElementById("object-handler-box");
  if (!box) return;
  box.removeEventListener("mouseover", objectHandler);
  var log = document.getElementById("event-log");
  if (log) log.insertAdjacentHTML("beforeend", "<div class='log-line'>Об'єкт-обробник видалено");
}

// ================================================
// ЗАВДАННЯ 2: ДЕЛЕГУВАННЯ ПОДІЙ
// ================================================

// --- 2а. Підсвічування елементів списку через event.target ---
function initListHighlight() {
  var list = document.getElementById("highlight-list");
  if (!list) return;

  list.onclick = function(event) {
    // Знімаємо підсвічування з усіх li
    var items = list.querySelectorAll("li");
    items.forEach(function(li) { li.classList.remove("li-active"); });

    // Підсвічуємо лише натиснутий елемент через event.target
    if (event.target.tagName === "LI") {
      event.target.classList.add("li-active");
    }
  };
}

// --- 2б. Меню кнопок з data-action + один обробник ---
function menuAction_search() {
  var log = document.getElementById("event-log");
  if (log) log.insertAdjacentHTML("beforeend", "<div class='log-line'>Пошук запущено</div>");
}
function menuAction_filter() {
  var log = document.getElementById("event-log");
  if (log) log.insertAdjacentHTML("beforeend", "<div class='log-line'>Фільтр застосовано</div>");
}
function menuAction_sort() {
  var log = document.getElementById("event-log");
  if (log) log.insertAdjacentHTML("beforeend", "<div class='log-line'>⬆Сортування виконано</div>");
}
function menuAction_reset() {
  var log = document.getElementById("event-log");
  if (log) {
    log.innerHTML = "";
    log.insertAdjacentHTML("beforeend", "<div class='log-line'>Журнал очищено</div>");
  }
}

function initDataMenu() {
  var menu = document.getElementById("data-menu");
  if (!menu) return;

  menu.addEventListener("click", function(event) {
    var btn = event.target.closest("[data-action]");
    if (!btn) return;
    var action = btn.dataset.action;
    // Викликаємо відповідну функцію через словник
    var actions = {
      search: menuAction_search,
      filter: menuAction_filter,
      sort:   menuAction_sort,
      reset:  menuAction_reset
    };
    if (actions[action]) actions[action]();
  });
}


function initBehaviors() {
  document.addEventListener("click", function(event) {
    var el = event.target.closest("[data-behavior]");
    if (!el) return;
    var behavior = el.dataset.behavior;

    if (behavior === "toggle-theme") {
      document.body.classList.toggle("theme-light");
      var log = document.getElementById("event-log");
      var isLight = document.body.classList.contains("theme-light");
      if (log) log.insertAdjacentHTML("beforeend",
        "<div class='log-line'>Тема змінена: " + (isLight ? "світла" : "темна") + "</div>");
    }

    if (behavior === "scroll-to-top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (behavior === "clear-log") {
      var log = document.getElementById("event-log");
      if (log) log.innerHTML = '<div class="log-line" style="color:#6080a0;">Журнал очищено.</div>';
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  assignMousePropertyHandlers();
  initMultipleListeners();
  initObjectHandler();
  initListHighlight();
  initDataMenu();
  initBehaviors();
  initMouseOverOut();
  initDragAndDrop();
});

// ================================================
// ЗАВДАННЯ: ПОДІЇ МИШІ — mouseover / mouseout
// event.target, event.relatedTarget
// ================================================

function initMouseOverOut() {
  var container = document.getElementById("mouseover-demo");
  if (!container) return;

  var log = document.getElementById("mouseover-log");

  function logMsg(msg) {
    if (!log) return;
    var line = document.createElement("div");
    line.className = "log-line";
    line.textContent = msg;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }

  container.addEventListener("mouseover", function(event) {
    var target = event.target;
    var from = event.relatedTarget;

    if (target === container) return;

    // Підсвічуємо елемент
    target.classList.add("mo-active");

    var fromName = from ? (from.dataset.label || from.tagName) : "поза вікном";
    var toName   = target.dataset.label || target.tagName;
    logMsg("mouseover → " + toName);
  });

  container.addEventListener("mouseout", function(event) {
    var target = event.target;
    var to = event.relatedTarget;

    if (target === container) return;

    target.classList.remove("mo-active");

    var toName   = to ? (to.dataset.label || to.tagName) : "поза вікном";
    var fromName = target.dataset.label || target.tagName;
    logMsg("mouseout  ← " + fromName);
  });
}

// ================================================
// ЗАВДАННЯ: DRAG-AND-DROP через mousedown/mousemove/mouseup
// ================================================

function initDragAndDrop() {
  var draggables = document.querySelectorAll(".draggable-item");
  var zones      = document.querySelectorAll(".drop-zone");
  var log        = document.getElementById("mouseover-log");

  function logMsg(msg) {
    if (!log) return;
    var line = document.createElement("div");
    line.className = "log-line";
    line.textContent = msg;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
  }

  draggables.forEach(function(el) {
    var isDragging = false;
    var ghost      = null;
    var startX, startY, offsetX, offsetY;

    el.addEventListener("mousedown", function(e) {
      e.preventDefault();
      isDragging = true;

      // Створюємо "привид" — копію елемента
      ghost = el.cloneNode(true);
      ghost.style.cssText =
        "position:fixed; pointer-events:none; z-index:9999; opacity:0.85;" +
        "transform:rotate(2deg) scale(1.05); transition:none;";

      var rect = el.getBoundingClientRect();
      offsetX = e.clientX - rect.left;
      offsetY = e.clientY - rect.top;
      ghost.style.left = rect.left + "px";
      ghost.style.top  = rect.top  + "px";
      ghost.style.width  = rect.width  + "px";
      ghost.style.height = rect.height + "px";

      document.body.appendChild(ghost);
      el.classList.add("dragging");
      logMsg("mousedown: починаю тягнути «" + el.textContent.trim() + "»");
    });

    document.addEventListener("mousemove", function(e) {
      if (!isDragging || !ghost) return;

      ghost.style.left = (e.clientX - offsetX) + "px";
      ghost.style.top  = (e.clientY - offsetY) + "px";

      // Підсвічуємо зону під курсором
      zones.forEach(function(z) { z.classList.remove("dz-hover"); });
      var elBelow = document.elementFromPoint(e.clientX, e.clientY);
      var zone = elBelow ? elBelow.closest(".drop-zone") : null;
      if (zone) zone.classList.add("dz-hover");
    });

    document.addEventListener("mouseup", function(e) {
      if (!isDragging) return;
      isDragging = false;

      if (ghost) { ghost.remove(); ghost = null; }
      el.classList.remove("dragging");

      // Перевіряємо, чи відпустили над зоною
      zones.forEach(function(z) { z.classList.remove("dz-hover"); });
      var elBelow = document.elementFromPoint(e.clientX, e.clientY);
      var zone = elBelow ? elBelow.closest(".drop-zone") : null;

      if (zone) {
        zone.appendChild(el);
        logMsg("mouseup: «" + el.textContent.trim() + "» → зона «" + (zone.dataset.name || zone.id) + "»");
      } else {
        logMsg("mouseup: кинуто поза зоною");
      }
    });
  });
}
