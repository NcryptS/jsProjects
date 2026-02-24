const form = document.querySelector("form");

form.addEventListener("submit", function (iter) {
  iter.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);

  if (height < 0 || isNaN(height) || height == "") {
    document.querySelector("#results").innerHTML =
      `${height} is not a valid Height`;
  } else if (weight < 0 || weight == "" || isNaN(weight)) {
    document.querySelector("#results").innerHTML =
      `${weight} is not a valid Weight`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    if (bmi < 18.6)
      document.querySelector("#results").innerHTML =
        `<span>Your BMI is ${bmi}<span\> You are Under-weight`;
    else if (bmi > 18.6 && bmi < 24.9) {
      document.querySelector("#results").innerHTML =
        `<span>Your BMI is ${bmi}<span\> You have correct Weight and Height`;
    } else if (bmi > 24.9) {
      document.querySelector("#results").innerHTML =
        `<span>Your BMI is ${bmi}<span\> You are Over-weight. Go Exercise`;
    }
  }
});
