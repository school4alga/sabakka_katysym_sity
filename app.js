// localStorage-қа кілт
// --------- ТІЛ АУЫСТЫРУ (KZ / RU) ---------
let currentLang = "kk";

const i18n = {
  kk: {
    navHome: "Басты бет",
    navAttendance: "Қатысым",
    navStats: "Статистика",
    bannerTitle: "Сабаққа қатысу мониторингі",
    bannerSubtitle:
      "Оқушылардың сабаққа қатысуын, кешігуді және себепсіз қалуды\nкүнделікті бақылауға арналған мектепішілік жүйе.",
    bannerButton: "Қатысым белгілеу",

    attendanceTitle: "Қатысым белгілеу",
    attendanceDateLabel: "Күні",
    attendanceClassLabel: "Сынып",
    attendanceSearchLabel: "ФИО бойынша іздеу",
    legendPresent: "✔ Қатысты",
    legendAbsent: "❌ Қатыспады",
    legendLate: "🕒 Кешікті",
    legendSick: "🤒 Ауырды",
    thIdx: "№",
    thName: "Оқушының аты-жөні",
    thClass: "Сынып",
    thStatus: "Статус",
    saveBtn: "✅ Бүгінгі посещаемостьті сақтау",

    statsTitle: "Статистика және рейтинг",
    periodTypeLabel: "Уақыт кезеңі",
    optAll: "Барлығы",
    optMonth: "Айлық",
    optQuarter: "Тоқсандық",
    optYear: "Жылдық",
    monthLabel: "Ай",
    quarterLabel: "Тоқсан",
    yearLabel: "Жыл",
    q1: "I тоқсан",
    q2: "II тоқсан",
    q3: "III тоқсан",
    q4: "IV тоқсан",
    updateStatsBtn: "🔄 Статистиканы жаңарту",
    exportCsvBtn: "📥 CSV экспорт",

    totalLessonsLabel: "Барлық белгіленген сабақтар",
    totalPresentLabel: "Қатысқандар",
    totalAbsentLabel: "Себепсіз қалғандар",
    totalLateLabel: "Кешіккендер",
    totalSickLabel: "Ауырғандар",

    topLateTitle: "TOP кешіккен оқушылар",
    topLateIdx: "№",
    topLateName: "Оқушы",
    topLateClass: "Сынып",
    topLateCount: "Кешіккен",

    topAbsentTitle: "TOP себепсіз қалған оқушылар",
    topAbsentIdx: "№",
    topAbsentName: "Оқушы",
    topAbsentClass: "Сынып",
    topAbsentCount: "Себепсіз"
  },
  ru: {
    navHome: "Главная",
    navAttendance: "Посещаемость",
    navStats: "Статистика",
    bannerTitle: "Мониторинг посещаемости",
    bannerSubtitle:
      "Система ежедневного контроля присутствия,\nопозданий и пропусков уроков учащихся.",
    bannerButton: "Отметить посещаемость",

    attendanceTitle: "Отметка посещаемости",
    attendanceDateLabel: "Дата",
    attendanceClassLabel: "Класс",
    attendanceSearchLabel: "Поиск по ФИО",
    legendPresent: "✔ Был(а) на уроке",
    legendAbsent: "❌ Отсутствовал(а) без причины",
    legendLate: "🕒 Опоздал(а)",
    legendSick: "🤒 Болел(а)",
    thIdx: "№",
    thName: "ФИО ученика",
    thClass: "Класс",
    thStatus: "Статус",
    saveBtn: "✅ Сохранить посещаемость",

    statsTitle: "Статистика и рейтинг",
    periodTypeLabel: "Период",
    optAll: "За всё время",
    optMonth: "За месяц",
    optQuarter: "За четверть",
    optYear: "За год",
    monthLabel: "Месяц",
    quarterLabel: "Четверть",
    yearLabel: "Год",
    q1: "I четверть",
    q2: "II четверть",
    q3: "III четверть",
    q4: "IV четверть",
    updateStatsBtn: "🔄 Обновить статистику",
    exportCsvBtn: "📥 Экспорт CSV",

    totalLessonsLabel: "Всего отмеченных уроков",
    totalPresentLabel: "Присутствовал(и)",
    totalAbsentLabel: "Отсутствовал(и) без причины",
    totalLateLabel: "Опоздал(и)",
    totalSickLabel: "Болел(и)",

    topLateTitle: "TOP опоздавших",
    topLateIdx: "№",
    topLateName: "Ученик",
    topLateClass: "Класс",
    topLateCount: "Опозданий",

    topAbsentTitle: "TOP пропускавших без причины",
    topAbsentIdx: "№",
    topAbsentName: "Ученик",
    topAbsentClass: "Класс",
    topAbsentCount: "Пропусков"
  }
};

function applyTranslations() {
  const t = i18n[currentLang];

  const map = {
    navHome: "navHome",
    navAttendance: "navAttendance",
    navStats: "navStats",

    bannerTitle: "bannerTitle",
    bannerSubtitle: "bannerSubtitle",
    bannerButton: "bannerButton",

    attendanceTitle: "attendanceTitle",
    attendanceDateLabel: "attendanceDateLabel",
    attendanceClassLabel: "attendanceClassLabel",
    attendanceSearchLabel: "attendanceSearchLabel",
    thIdx: "thIdx",
    thName: "thName",
    thClass: "thClass",
    thStatus: "thStatus",
    saveBtn: "saveAttendanceBtn",

    statsTitle: "statsTitle",
    periodTypeLabel: "periodTypeLabel",
    optAll: "optAll",
    optMonth: "optMonth",
    optQuarter: "optQuarter",
    optYear: "optYear",
    monthLabel: "monthLabel",
    quarterLabel: "quarterLabel",
    yearLabel: "yearLabel",
    q1: "q1",
    q2: "q2",
    q3: "q3",
    q4: "q4",
    updateStatsBtn: "updateStatsBtn",
    exportCsvBtn: "exportCsvBtn",

    totalLessonsLabel: "totalLessonsLabel",
    totalPresentLabel: "totalPresentLabel",
    totalAbsentLabel: "totalAbsentLabel",
    totalLateLabel: "totalLateLabel",
    totalSickLabel: "totalSickLabel",

    topLateTitle: "topLateTitle",
    topLateIdx: "topLateIdx",
    topLateName: "topLateName",
    topLateClass: "topLateClass",
    topLateCount: "topLateCount",

    topAbsentTitle: "topAbsentTitle",
    topAbsentIdx: "topAbsentIdx",
    topAbsentName: "topAbsentName",
    topAbsentClass: "topAbsentClass",
    topAbsentCount: "topAbsentCount"
  };

  Object.entries(map).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (!el || !t[key]) return;

    if (key === "bannerSubtitle") {
      el.innerHTML = t[key].replace(/\n/g, "<br />");
    } else {
      el.textContent = t[key];
    }
  });

  // Легендадағы emoji-мен бірге
  const legendPresent = document.getElementById("legendPresent");
  const legendAbsent = document.getElementById("legendAbsent");
  const legendLate = document.getElementById("legendLate");
  const legendSick = document.getElementById("legendSick");

  if (legendPresent) legendPresent.innerHTML = `<span class="legend-box present"></span> ${t.legendPresent}`;
  if (legendAbsent) legendAbsent.innerHTML = `<span class="legend-box absent"></span> ${t.legendAbsent}`;
  if (legendLate) legendLate.innerHTML = `<span class="legend-box late"></span> ${t.legendLate}`;
  if (legendSick) legendSick.innerHTML = `<span class="legend-box sick"></span> ${t.legendSick}`;
}
// --------- /ТІЛ АУЫСТЫРУ ---------

const STORAGE_KEY = "mektep_attendance_records";

// [{date:'2025-09-01', studentId:'Аты|7А', class:'7А', status:'present'}]
let attendanceRecords = [];

// Жазбаларды жүктеу
function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) attendanceRecords = JSON.parse(raw);
  } catch (e) {
    console.error("Attendance load error", e);
    attendanceRecords = [];
  }
}

// Жазбаларды сақтау
function saveRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(attendanceRecords));
}

// Бөлімге скролл
function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// Уақыт диапазонын анықтау
function getPeriodRange() {
  const type = document.getElementById("periodType").value;
  const today = new Date();

  if (type === "all") return { start: null, end: null };

  if (type === "month") {
    const mi = document.getElementById("monthInput").value; // YYYY-MM
    if (!mi) return { start: null, end: null };
    const [y, m] = mi.split("-").map(Number);
    const start = new Date(y, m - 1, 1);
    const end = new Date(y, m, 0, 23, 59, 59);
    return { start, end };
  }

  if (type === "year") {
    const y = Number(document.getElementById("yearInput").value || today.getFullYear());
    const start = new Date(y, 0, 1);
    const end = new Date(y, 11, 31, 23, 59, 59);
    return { start, end };
  }

  if (type === "quarter") {
    const q = Number(document.getElementById("quarterInput").value || 1);
    const y = Number(
      document.getElementById("quarterYearInput").value || today.getFullYear()
    );
    const startMonth = (q - 1) * 3; // 0,3,6,9
    const endMonth = startMonth + 2;
    const start = new Date(y, startMonth, 1);
    const end = new Date(y, endMonth + 1, 0, 23, 59, 59);
    return { start, end };
  }

  return { start: null, end: null };
}

// Диапазонға түсетін-жатпайтын тексеру
function inRange(dateStr, range) {
  if (!range.start && !range.end) return true;
  const d = new Date(dateStr);
  if (range.start && d < range.start) return false;
  if (range.end && d > range.end) return false;
  return true;
}

// Бір оқушыға кумулятив статистика
function buildAggregates(range) {
  const statsByStudent = {}; // key -> {name, class, present, absent, late, sick, total}
  let totals = { present: 0, absent: 0, late: 0, sick: 0, lessons: 0 };

  attendanceRecords.forEach(rec => {
    if (!inRange(rec.date, range)) return;

    const key = rec.studentId;
    if (!statsByStudent[key]) {
      const student = students.find(s => s.id === key);
      statsByStudent[key] = {
        id: key,
        name: student ? student.name : key.split("|")[0],
        class: student ? student.class : rec.class,
        present: 0,
        absent: 0,
        late: 0,
        sick: 0,
        total: 0
      };
    }

    const s = statsByStudent[key];
    s.total++;
    totals.lessons++;

    if (rec.status === "present") {
      s.present++;
      totals.present++;
    } else if (rec.status === "absent") {
      s.absent++;
      totals.absent++;
    } else if (rec.status === "late") {
      s.late++;
      totals.late++;
    } else if (rec.status === "sick") {
      s.sick++;
      totals.sick++;
    }
  });

  return { statsByStudent, totals };
}

// UI-ды толтыру
document.addEventListener("DOMContentLoaded", () => {
  loadRecords();
    // Тілді бастапқыда қолдану
  applyTranslations();

  // Тіл ауыстырғыш
  const langToggle = document.getElementById("langToggle");
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "kk" ? "ru" : "kk";
      applyTranslations();
    });
  }
  // тіл ауысқанда мектеп атауын да ауыстыру
const schoolTitleKK = document.querySelector('#schoolTitles span[data-lang="kk"]');
const schoolTitleRU = document.querySelector('#schoolTitles span[data-lang="ru"]');

if(currentLang==="kk"){
  schoolTitleKK.style.display="inline";
  schoolTitleRU.style.display="none";
} else {
  schoolTitleKK.style.display="none";
  schoolTitleRU.style.display="inline";
}


  const classSelect = document.getElementById("classSelect");
  const attendanceDate = document.getElementById("attendanceDate");
  const searchInput = document.getElementById("searchInput");
  const saveBtn = document.getElementById("saveAttendanceBtn");
  const saveStatus = document.getElementById("saveStatus");

  const periodType = document.getElementById("periodType");
  const monthControl = document.getElementById("monthControl");
  const quarterControl = document.getElementById("quarterControl");
  const yearControl = document.getElementById("yearControl");
  const yearInput = document.getElementById("yearInput");
  const quarterYearInput = document.getElementById("quarterYearInput");
  const updateStatsBtn = document.getElementById("updateStatsBtn");
  const exportCsvBtn = document.getElementById("exportCsvBtn");

  // Үнсіз келісім – бүгін
  const today = new Date();
  attendanceDate.value = today.toISOString().slice(0, 10);

  // Жыл өрістерін толтыру
  const currentYear = today.getFullYear();
  yearInput.value = currentYear;
  quarterYearInput.value = currentYear;

  // Сыныптар тізімі
  const classes = [...new Set(students.map(s => s.class))].sort((a, b) => {
    const gradeA = parseInt(a);
    const gradeB = parseInt(b);
    if (gradeA !== gradeB) return gradeA - gradeB;
    return a.localeCompare(b, "kk");
  });

  classes.forEach(cls => {
    const opt = document.createElement("option");
    opt.value = cls;
    opt.textContent = cls;
    classSelect.appendChild(opt);
  });

  // Посещаемость таблицасын жаңарту
  function renderAttendanceTable() {
    const tbody = document.querySelector("#attendanceTable tbody");
    tbody.innerHTML = "";

    const selectedClass = classSelect.value;
    const query = searchInput.value.trim().toLowerCase();

    let filtered = students;

    if (selectedClass) {
      filtered = filtered.filter(s => s.class === selectedClass);
    }

    if (query) {
      filtered = filtered.filter(s => s.name.toLowerCase().includes(query));
    }

    filtered.forEach((s, index) => {
      const tr = document.createElement("tr");

      const tdIdx = document.createElement("td");
      tdIdx.textContent = index + 1;

      const tdName = document.createElement("td");
      tdName.textContent = s.name;

      const tdClass = document.createElement("td");
      tdClass.textContent = s.class;

      const tdStatus = document.createElement("td");
      const select = document.createElement("select");
      select.className = "status-select";
      select.dataset.studentId = s.id;

      const options = [
        { value: "", label: "—" },
        { value: "present", label: "✔ Қатысты" },
        { value: "absent", label: "❌ Қатыспады" },
        { value: "late", label: "🕒 Кешікті" },
        { value: "sick", label: "🤒 Ауырды" }
      ];

      options.forEach(optData => {
        const opt = document.createElement("option");
        opt.value = optData.value;
        opt.textContent = optData.label;
        select.appendChild(opt);
      });

      tdStatus.appendChild(select);

      tr.appendChild(tdIdx);
      tr.appendChild(tdName);
      tr.appendChild(tdClass);
      tr.appendChild(tdStatus);

      tbody.appendChild(tr);
    });
  }

  classSelect.addEventListener("change", renderAttendanceTable);
  searchInput.addEventListener("input", renderAttendanceTable);

  // Посещаемость сақтау
  saveBtn.addEventListener("click", () => {
    const date = attendanceDate.value;
    if (!date) {
      saveStatus.textContent = "Күнді таңдаңыз.";
      saveStatus.style.color = "red";
      return;
    }

    const selects = document.querySelectorAll(".status-select");
    let count = 0;

    selects.forEach(sel => {
      const status = sel.value;
      if (!status) return;

      const studentId = sel.dataset.studentId;
      const student = students.find(s => s.id === studentId);
      if (!student) return;

      // Сол күн, сол оқушы – бұрынғы жазбаны өшіреміз
      attendanceRecords = attendanceRecords.filter(
        r => !(r.date === date && r.studentId === studentId)
      );

      attendanceRecords.push({
        date,
        studentId,
        class: student.class,
        status
      });
      count++;
    });

    saveRecords();
    updateStats();

    if (count > 0) {
      saveStatus.textContent = `Сақталды: ${count} жазба.`;
      saveStatus.style.color = "green";
    } else {
      saveStatus.textContent = "Статус таңдаған оқушы жоқ.";
      saveStatus.style.color = "orange";
    }
  });

  // Период типін ауыстырғанда басқару элементтерін көрсету
  function updatePeriodControls() {
    const type = periodType.value;
    monthControl.style.display = type === "month" ? "flex" : "none";
    quarterControl.style.display = type === "quarter" ? "flex" : "none";
    yearControl.style.display = type === "year" ? "flex" : "none";
  }

  periodType.addEventListener("change", () => {
    updatePeriodControls();
    updateStats();
  });

  updatePeriodControls();

  // Статистиканы жаңарту
  function updateStats() {
    const range = getPeriodRange();
    const { statsByStudent, totals } = buildAggregates(range);

    document.getElementById("totalLessons").textContent = totals.lessons;
    document.getElementById("totalPresent").textContent = totals.present;
    document.getElementById("totalAbsent").textContent = totals.absent;
    document.getElementById("totalLate").textContent = totals.late;
    document.getElementById("totalSick").textContent = totals.sick;

    // TOP кешіккендер
    const lateArr = Object.values(statsByStudent)
      .filter(s => s.late > 0)
      .sort((a, b) => b.late - a.late)
      .slice(0, 10);

    const lateBody = document.querySelector("#topLateTable tbody");
    lateBody.innerHTML = "";
    lateArr.forEach((s, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${idx + 1}</td><td>${s.name}</td><td>${s.class}</td><td>${s.late}</td>`;
      lateBody.appendChild(tr);
    });

    // TOP себепсіз қалғандар
    const absentArr = Object.values(statsByStudent)
      .filter(s => s.absent > 0)
      .sort((a, b) => b.absent - a.absent)
      .slice(0, 10);

    const absentBody = document.querySelector("#topAbsentTable tbody");
    absentBody.innerHTML = "";
    absentArr.forEach((s, idx) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `<td>${idx + 1}</td><td>${s.name}</td><td>${s.class}</td><td>${s.absent}</td>`;
      absentBody.appendChild(tr);
    });
  }

  updateStatsBtn.addEventListener("click", updateStats);

  // CSV экспорт
  exportCsvBtn.addEventListener("click", () => {
    const range = getPeriodRange();
    const { statsByStudent } = buildAggregates(range);
    const rows = [
      ["Аты-жөні", "Сынып", "Қатысты", "Қатыспады", "Кешікті", "Ауырды", "Барлығы"]
    ];

    Object.values(statsByStudent).forEach(s => {
      rows.push([
        s.name,
        s.class,
        s.present,
        s.absent,
        s.late,
        s.sick,
        s.total
      ]);
    });

    const csvContent = rows
      .map(r =>
        r
          .map(v =>
            typeof v === "string" && v.includes(",")
              ? `"${v.replace(/"/g, '""')}"`
              : v
          )
          .join(",")
      )
      .join("\n");

    const blob = new Blob([csvContent], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "attendance_stats.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  // Бастапқы рендер
  renderAttendanceTable();
  updateStats();
});
