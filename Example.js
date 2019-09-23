var reset = document.querySelector("#b");

var content = document.querySelectorAll("td");

function clearContent() {
  for (var i = 0; i < content.length; i++) {
    content[i].textContent = " ";
  }
}

reset.addEventListener("click",clearContent);

function cellMarker() {
  if (this.textContent === " "){
    this.textContent = "X";
  }
  else if (this.textContent === "O") {
    this.textContent = " ";
  }
  else if (this.textContent === "X") {
    this.textContent = "O";
  }
}

for (var i = 0; i < content.length; i++) {
  content[i].addEventListener("click", cellMarker);
}
