document.getElementById("hideSemesters").addEventListener("click", hideSemesters);
document.getElementById("hideDate").addEventListener("click", hideDates);
document.getElementById("year").addEventListener("input", addingSemesters);
document.onload = mommyFunky();
document.getElementById("form").addEventListener("submit", function (event){event.preventDefault(); kiddyFunky()});