function yes() {
  document.getElementById("msg").innerHTML =
    "YAY!!! 💕 I can’t wait to make memories with you 🥰";
}

function move(btn) {
  btn.style.position = "absolute";
  btn.style.top = Math.random() * 80 + "%";
  btn.style.left = Math.random() * 80 + "%";
}
