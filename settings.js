let switchMode = document.getElementById("switchMode");

switchMode.onclick = function() {
  let theme = document.getElementById("theme");

  if(theme.getAttribute("href") == "settings.css") {
    theme.href = "settings2.css";
  } else{
    theme.href = "settings.css";
  }
}
