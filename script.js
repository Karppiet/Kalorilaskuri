function calculate() {
  event.preventDefault();
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let age = document.querySelector("#age").value;
  let sex = document.querySelector(
    "input[type='radio'][name=sex]:checked"
  ).value;
  let activity = document.querySelector("#activity").value;

  console.log(weight, height, age, sex, activity);

  let wresult = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

  let mresult = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;

  if (sex == "woman") {
    if (activity == "no") {
      console.log(1.3 * wresult);
    } else if (activity == "some") {
      console.log(1.5 * wresult);
    } else if (activity == "frequent") {
      console.log(1.7 * wresult);
    } else if (activity == "active") {
      console.log(1.9 * wresult);
    } else if (activity == "max") {
      console.log(2.2 * wresult);
    }
  } else if ((sex = "man")) {
    if (activity == "no") {
      console.log(1.3 * mresult);
    } else if (activity == "some") {
      console.log(1.5 * mresult);
    } else if (activity == "frequent") {
      console.log(1.7 * mresult);
    } else if (activity == "active") {
      console.log(1.9 * mresult);
    } else if (activity == "max") {
      console.log(2.2 * mresult);
    }
  }


}
