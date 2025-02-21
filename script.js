function calculate() {
  // estetään lomakkeen uudelleenlataus
  event.preventDefault();

  // sijoitetaan muuttujiin formiin syötetyt arvot
  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let age = document.querySelector("#age").value;
  let sex = document.querySelector(
    "input[type='radio'][name=sex]:checked"
  ).value;
  let activity = document.querySelector("#activity").value;
  // haetaan div idn avulla
  let results = document.querySelector("#results");
  // console logits debuggausta varten
  console.log(weight, height, age, sex, activity);
  // sijoitetaan muuttujaan laskukaava jolla selvitetään kalorintarve naisten sekä miesten osalta
  let wresult = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

  let mresult = 66.5 + 13.75 * weight + 5.003 * height - 6.75 * age;
  // if else lause joka laskee aktiivisuuskertoimen avulla lopullisen kalorintarpeen sekä sijoitetaan tulos h1 kenttään divissä
  if (sex == "woman") {
    if (activity == "no") {
      results.innerHTML = `<h1>${1.3 * wresult}</h1>`;
    } else if (activity == "some") {
      results.innerHTML = `<h1>${1.5 * wresult}</h1>`;
    } else if (activity == "frequent") {
      results.innerHTML = `<h1>${1.7 * wresult}</h1>`;
    } else if (activity == "active") {
      results.innerHTML = `<h1>${1.9 * wresult}</h1>`;
    } else if (activity == "max") {
      results.innerHTML = `<h1>${2.2 * wresult}</h1>`;
    }
  } else if ((sex = "man")) {
    if (activity == "no") {
      results.innerHTML = `<h1>${1.3 * mresult}</h1>`;
    } else if (activity == "some") {
      results.innerHTML = `<h1>${1.5 * mresult}</h1>`;
    } else if (activity == "frequent") {
      results.innerHTML = `<h1>${1.7 * mresult}</h1>`;
    } else if (activity == "active") {
      results.innerHTML = `<h1>${1.9 * mresult}</h1>`;
    } else if (activity == "max") {
      results.innerHTML = `<h1>${2.2 * mresult}</h1>`;
    }
  }
}
