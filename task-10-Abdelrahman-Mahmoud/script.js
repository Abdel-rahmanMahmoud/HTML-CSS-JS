const examBtn = document.getElementById("exam-btn");
const timer = document.getElementById("timer");
const examContainer = document.getElementById("exam-container");
const resultContainer = document.getElementById("result-container");
const restartBtn = document.getElementById("restart-btn");

let timeLeft = 600; // 10 دقائق بالثواني
let timerInterval;

examBtn.addEventListener("click", function () {
  if (examBtn.textContent === "بدء الامتحان") {
    // بدء الامتحان
    startExam();
  } else {
    // إنهاء الامتحان
    finishExam();
  }
});

restartBtn.addEventListener("click", function () {
  // إعادة تعيين كل شيء
  resetExam();
});

function startExam() {
  // تغيير الزر لزر إنهاء
  examBtn.textContent = "إنهاء الامتحان";
  examBtn.classList.add("finish");

  // إظهار العداد
  timer.style.display = "block";

  // بدء العد التنازلي
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  // إضافة صفر أمام الثواني إذا كانت أقل من 10
  seconds = seconds < 10 ? "0" + seconds : seconds;

  timer.textContent = `${minutes}:${seconds}`;

  if (timeLeft <= 0) {
    // انتهى الوقت
    finishExam();
  } else {
    timeLeft--;
  }
}

function finishExam() {
  // إيقاف العداد
  clearInterval(timerInterval);

  // إخفاء واجهة الامتحان وإظهار نتيجة النهاية
  examContainer.style.display = "none";
  resultContainer.style.display = "block";
}

function resetExam() {
  // إعادة تعيين الوقت
  timeLeft = 600;

  // إعادة تعيين الزر
  examBtn.textContent = "بدء الامتحان";
  examBtn.classList.remove("finish");

  // إخفاء العداد
  timer.style.display = "none";

  // إعادة عرض واجهة الامتحان وإخفاء النتيجة
  examContainer.style.display = "block";
  resultContainer.style.display = "none";
}
