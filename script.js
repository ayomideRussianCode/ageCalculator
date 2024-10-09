document.querySelector(".submit-btn").addEventListener("click", function () {
  // Get Input values
  const dayInput = document.getElementById("day").value;
  const monthInput = document.getElementById("month").value;
  const yearInput = document.getElementById("year").value;

  // Get error display elements
  const errorDay = document.querySelector(".error-day");
  const errorMonth = document.querySelector(".error-month");
  const errorYear = document.querySelector(".error-year");

  //Reset error messages
  errorDay.textContent = "";
  errorMonth.textContent = "";
  errorYear.textContent = "";

  //input validation
  let isValid = true;

  //check for empty fields
  if (!dayInput || !monthInput || !yearInput) {
    if (!dayInput) errorDay.textContent = "This field is required";
    if (!monthInput) errorMonth.textContent = "This field is required";
    if (!yearInput) errorYear.textContent = "This field is required";
    isValid = false;
  }

  const day = parseInt(dayInput);
  const month = parseInt(monthInput);
  const year = parseInt(yearInput);

  //check if the day is between 1 and 31})
  if (isValid && (dayInput < 1 || dayInput > 31)) {
    errorDay.textContent = "Must be a valid day";
    isValid = false;
  }

  //check if the month is between 1 and 12
  if (isValid && (monthInput < 1 || monthInput > 12)) {
    errorMonth.textContent = "Must be a valid month";
    isValid = false;
  }

  //check if year is in the past
  const currDate = new Date();
  const currYear = currDate.getFullYear();
  if (isValid && year > currYear) {
    errorYear.textContent = "Must be in the past";
    isValid = false;
  }

  //calculation of age for valid input
  const maxDaysInMonth = new Date(year, month, 0).getDate();
  if (isValid && day.maxDaysInMonth) {
    errorDay.textContent =
      "Must be a valid day for the selected month ${maxDaysInMonth}";
    isValid = false;
  }

  //calculate age if inputs are valid
  if (isValid) {
    const birthDate = new Date(`${year}-${month}-${day}`);
    const age = calculateAge(birthDate);

    document.querySelector(".output-year").textContent = age.years;
    document.querySelector(".output-month").textContent = age.months;
    document.querySelector(".output-day").textContent = age.days;
  } else {
    document.querySelector(".output.year").textContent = "--";
    document.querySelector(".output-month").textContent = "--";
    document.querySelector(".output-day").textContent = "--";
  }
});
function calculateAge(birthDate) {
  const today = new Date();
  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    days = +prevMonth;
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months, days };
}
