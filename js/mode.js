$(document).ready(function () {
  var darkTheme = window.localStorage.getItem("checkbox");

  // Set tema default
  if (darkTheme === "true") {
    $("#body").addClass("dark-mode");
    $("#checkbox").prop("checked", true);
  }

  // Handler klik checkbox
  $("#checkbox").click(function () {
    var isChecked = $("#checkbox").prop("checked");

    //Menerapkan dark mode jika checkbox dicentang, jika tidak terapkan light mode
    if (isChecked) {
      $("#body").addClass("dark-mode");
    } else {
      $("#body").removeClass("dark-mode");
    }

    //Menyimpan status checkbox ke localStorage
    window.localStorage.setItem("checkbox", isChecked);
  });
});
