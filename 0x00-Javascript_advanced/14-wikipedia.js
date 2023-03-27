function createElement(data) {
  let p = document.createElement("p");
  p.innerText = data;
  document.body.append(p);
}

function queryWikipedia(callback) {
  const req = new XMLHttpRequest();
  req.addEventListener("load", callback())
  req.open("GET", 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*');
  req.send()
}
queryWikipedia(createElement);
