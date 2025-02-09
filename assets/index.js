function calculateDays() {
  const inputDate = document.getElementById("birthday");
  const errorMessage = document.getElementById("error");
  const result = document.getElementById("result");

  if (!inputDate.value) {
    errorMessage.style.display = "block";
    result.textContent = "";
    return;
  }

  errorMessage.style.display = "none";
  const today = new Date();
  let birthday = new Date(inputDate.value);
  birthday.setFullYear(today.getFullYear());

  if (birthday < today) {
    birthday.setFullYear(today.getFullYear() + 1);
  }

  const timeDifference = birthday - today;
  const daysLeft = Math.ceil(timeDifference / (1000 * 3600 * 24));

  let dayText = "дня";
  if (daysLeft % 10 === 1 && daysLeft % 100 !== 11) {
    dayText = "день";
  } else if (
    daysLeft % 10 >= 2 &&
    daysLeft % 10 >= 2 &&
    daysLeft % 10 <= 4 &&
    (daysLeft % 100 < 10 || daysLeft % 100 >= 20)
  ) {
    dayText = "дня";
  } else {
    dayText = "дней";
  }
  result.textContent = `До дня рождения осталось ${daysLeft} ${dayText}`;
}
document.getElementById("birthday").addEventListener("change", () => {
  document.getElementById("error").style.display = "none";
});
