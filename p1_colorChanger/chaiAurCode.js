const button = document.querySelectorAll(".button");
const body = document.querySelector("body");

button.forEach((iter) => {
  iter.addEventListener("click", function (e) {
    // console.log(e);
    console.log(e.target);
    if (e.target.id === "red") {
      body.style.backgroundColor = iter.id;
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = iter.id;
    }
    if (e.target.id === "blue") {
      body.style.backgroundColor = iter.id;
    }
    if (e.target.id === "yellow") {
      body.style.backgroundColor = iter.id;
    }
    if (e.target.id === "pink") {
      body.style.backgroundColor = iter.id;
    }
  });
});
