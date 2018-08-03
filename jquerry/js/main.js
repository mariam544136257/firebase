$("#italic").click(italic);
$("#bold").click(tobold);
$("#underline").click(toUnderline);
$("#fontFamily").change(changeFontFamily);
$("#fontSize").change(changeFontSize);

changeFontFamily()
changeFontSize()

function italic() {
  let i = $("#paragraph").css("font-style");
  if (i == "italic") {
    $("#paragraph").css("font-style", "normal");
  } else {
    $("#paragraph").css("font-style", "italic");
  }
}
function tobold() {
  let i = $("#paragraph").css("font-weight");
  if (i == "400") {
    $("#paragraph").css("font-weight", "bold");
  } else {
    $("#paragraph").css("font-weight", "normal");
  }
}
function toUnderline() {
  let i = $("#paragraph").css("text-decoration-line");
  if (i == "underline") {
    $("#paragraph").css("text-decoration-line", "initial");
  } else {
    $("#paragraph").css("text-decoration-line", "underline");
  }
}
function changeFontFamily() {
  let family = $("#fontFamily").val();
  $("#paragraph").css("font-family", family);
}
function changeFontSize() {
  let size = $("#fontSize").val();
  $("#paragraph").css("font-size", size);
}
