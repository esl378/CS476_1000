// JavaScript source code
document.getElementById("addDate").addEventListener("click", createDateObject);
document.getElementById("addSemester").addEventListener("click", createSemesterObject);
document.getElementById("hideSemesters").addEventListener("click", hideSemesters);
document.getElementById("hideDate").addEventListener("click", hideDates);
document.getElementById("form").addEventListener("submit", function (event){event.preventDefault(); daddyFunky()});