function changeMode(size, weight, transform, background, color) {
  return () => {
    document.body.setAttribute("font-size", size);
    document.body.setAttribute("font-weight", weight);
    document.body.setAttribute("text-transform", transform);
    document.body.setAttribute("background-color", background);
    document.body.setAttribute("color", color);
    return;
  }

}

function main() {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let p = document.createElement("p")
  p.textContent = "Welcome Holberton!";
  document.body.append(p);

  let b1 = document.createElement("button");
  b1.textContent = "Spooky";
  b1.addEventListener("click", spooky);
  document.body.append(b1);

  let b2 = document.createElement("button");
  b2.textContent = "Dark mode";
  b2.addEventListener("click", darkMode);
  document.body.append(b2);

  let b3 = document.createElement("Button");
  b3.textContent = "Scream mode";
  b3.addEventListener("click", screamMode);
}

main();
