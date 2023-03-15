document.getElementById("addDate").addEventListener("click", createDateObject);
document.getElementById("addSemester").addEventListener("click", createSemesterObject);
document.getElementById("hideSemesters").addEventListener("click", hideSemesters);
document.getElementById("hideDate").addEventListener("click", hideDates);
document.getElementById("year").addEventListener("blur", displaySemesters(getSelectedYear()));
document.onload = mommyFunky();