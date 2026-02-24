const clock = document.querySelector("#clock");

setInterval(function (iter) {
  iter = new Date();
  clock.innerHTML = iter.toLocaleTimeString();
}, 1000);
